import express from "express";

import {
  loadKnowledge,
  buildKnowledgePrompt,
} from "../services/knowledgeService.js";

import { askGemini } from "../services/geminiService.js";

import { detectTool } from "../services/toolService.js";

import {
  addMessage,
  buildConversationContext,
} from "../services/memoryService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    const sessionId = "default";
    const query = message.toLowerCase().trim();

    // ============================================
    // Greetings
    // ============================================

    const greetings = [
      "hi",
      "hello",
      "hey",
      "hii",
      "hiii",
      "good morning",
      "good afternoon",
      "good evening",
    ];

    if (greetings.includes(query)) {
      return res.json({
        type: "text",
        reply: `Hello! 👋

Welcome to Chinmayee AI, your personal portfolio assistant.

I'm here to help you explore:

🚀 Projects
💻 Technical Skills
📄 Resume
🎓 Education
🏆 Certifications
📬 Contact Information

Try asking:

• Tell me about JobBridge
• Explain TeleRAG-X
• Show me your resume
• What are your backend skills?`,
      });
    }

    // ============================================
    // Thanks
    // ============================================

    if (
      [
        "thanks",
        "thank you",
        "thankyou",
        "thx",
      ].includes(query)
    ) {
      return res.json({
        type: "text",
        reply: `You're welcome! 😊

Feel free to ask me anything about Chinmayee's projects, technical skills, resume, education, certifications or experience.`,
      });
    }

    // ============================================
    // Goodbye
    // ============================================

    if (
      [
        "bye",
        "goodbye",
        "see you",
        "see ya",
      ].includes(query)
    ) {
      return res.json({
        type: "text",
        reply: `Goodbye! 👋

Thanks for visiting Chinmayee's portfolio.

Have a wonderful day!`,
      });
    }

    // ============================================
    // Tool Detection
    // ============================================

    const tool = detectTool(message);

    if (tool.handled) {
      addMessage(sessionId, "user", message);
      addMessage(sessionId, "assistant", tool.reply);

      return res.json({
        type: "text",
        reply: tool.reply,
        action: tool.action,
        url: tool.url,
      });
    }

    // ============================================
    // Load Portfolio Knowledge
    // ============================================

    const knowledge = await loadKnowledge();

    // ============================================
    // Portfolio Question Detection
    // ============================================

    const portfolioKeywords = [
      "chinmayee",
      "yourself",
      "about yourself",
      "portfolio",
      "project",
      "projects",
      "jobbridge",
      "tele",
      "telerag",
      "tele rag",
      "lost",
      "found",
      "resume",
      "cv",
      "education",
      "college",
      "degree",
      "cgpa",
      "skill",
      "skills",
      "frontend",
      "backend",
      "react",
      "node",
      "express",
      "mongodb",
      "typescript",
      "javascript",
      "java",
      "python",
      "experience",
      "internship",
      "certification",
      "certifications",
      "github",
      "linkedin",
      "contact",
    ];

    const isPortfolioQuestion = portfolioKeywords.some((keyword) =>
      query.includes(keyword)
    );

    if (!isPortfolioQuestion) {
      return res.json({
        type: "text",
        reply: `I specialize in answering questions about Chinmayee's portfolio rather than general topics.

I can help you explore:

🚀 Projects
• JobBridge
• TeleRAG-X
• Lost & Found Portal

💻 Technical Skills
• Frontend Development
• Backend Development
• React
• Node.js
• Express.js
• MongoDB
• TypeScript
• Java
• Python

📄 Professional Profile
• Resume
• Education
• Certifications
• Experience
• Contact Information

Try asking:
• Who is Chinmayee?
• Tell me about yourself.
• What are your frontend skills?
• Show me your resume.`,
        action: "none",
        url: null,
      });
    }
        // ============================================
    // Project Detection
    // ============================================

    const project = knowledge.projects.find((project) => {
      const searchable = [
        project.name,
        project.title,
        ...(project.techStack || []),
        ...(project.features || []),
      ]
        .join(" ")
        .toLowerCase();

      return (
        searchable.includes(query) ||
        query.includes(project.name.toLowerCase())
      );
    });

    if (project) {
      addMessage(sessionId, "user", message);

      addMessage(
        sessionId,
        "assistant",
        `Displayed ${project.name}`
      );

      return res.json({
        type: "project",
        project,
      });
    }

    // ============================================
    // Gemini Prompt
    // ============================================

    const systemPrompt =
      buildKnowledgePrompt(knowledge);

    const history =
      buildConversationContext(sessionId);

    const finalPrompt = `
${systemPrompt}

========================
Conversation History
========================

${history}

========================
Current User Question
========================

${message}
`;

    const reply = await askGemini(
      finalPrompt,
      message
    );

    addMessage(sessionId, "user", message);

    addMessage(sessionId, "assistant", reply);

    return res.json({
      type: "text",
      reply,
      action: "none",
      url: null,
    });

  } catch (error) {
    console.error("===== CHAT ERROR =====");
    console.error(error);

    return res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
