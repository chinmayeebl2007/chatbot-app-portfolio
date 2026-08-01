const TOOLS = {
  github: {
    url: "https://github.com/chinmayeebl2007",
    reply: "Opening my GitHub profile...",
  },

  linkedin: {
    url: "https://www.linkedin.com/in/chinmayee-b-l-2160b2366",
    reply: "Opening my LinkedIn profile...",
  },

  portfolio: {
    url: "https://portfolio-l9i758hhi-chinmayeebl.vercel.app/",
    reply: "Opening my portfolio website...",
  },

  resume: {
    url: "http://localhost:5000/resume",
    reply: "Opening my resume...",
  },

  contact: {
    url: "mailto:chinmayeebl27@gmail.com",
    reply: "Opening your email app...",
  },
};

const KEYWORDS = {
  github: [
    "github",
    "repo",
    "repository",
    "source code",
  ],

  linkedin: [
    "linkedin",
    "linkedin profile",
    "professional profile",
  ],

  portfolio: [
    "portfolio",
    "website",
    "personal website",
    "home page",
  ],

  resume: [
    "resume",
    "cv",
    "download resume",
    "open resume",
  ],

  contact: [
    "contact",
    "email",
    "mail",
    "reach you",
    "contact you",
  ],
};

export function detectTool(message) {
  const text = message.toLowerCase();

  for (const toolName in KEYWORDS) {
    const keywords = KEYWORDS[toolName];

    if (
      keywords.some((keyword) =>
        text.includes(keyword)
      )
    ) {
      return {
        handled: true,

        action: toolName,

        reply: TOOLS[toolName].reply,

        url: TOOLS[toolName].url,
      };
    }
  }

  return {
    handled: false,
  };
}