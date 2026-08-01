import { useEffect, useState } from "react";
import Dashboard from "./components/layout/Dashboard";
import { sendMessage } from "./services/api";
import type { ChatResponse } from "./services/api";

import "./styles/global.css";
import "./styles/dashboard.css";
import "./styles/sidebar.css";
import "./styles/hero.css";
import "./styles/chat.css";
import "./styles/cards.css";
import "./styles/animations.css";

export type Message = {
  sender: "user" | "bot";
  text: string;
  type?: "text" | "project";
  project?: ChatResponse["project"];
};

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      type: "text",
      text: `👋 Welcome!

I'm Chinmayee AI, your personal AI portfolio assistant.

Ask me anything about:

🚀 Projects
💻 Skills
🎓 Education
📄 Resume
🏆 Certifications
📬 Contact`,
    },
  ]);

  const [history, setHistory] = useState<any[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (
      (localStorage.getItem("theme") as "light" | "dark") ||
      "light"
    );
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSend = async (question?: string) => {
    const message = (question || input).trim();

    if (!message || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    const historyItem = {
  id: Date.now(),
  question: message,
  answer: "",
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};

setHistory((prev) => {
  const updated = [historyItem, ...prev];

  localStorage.setItem(
    "history",
    JSON.stringify(updated)
  );

  return updated;
});

    setInput("");
    setLoading(true);

    try {
      const data = await sendMessage(message);

      if (data.type === "project" && data.project) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            type: "project",
            text: "",
            project: data.project,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: data.reply ?? "",
          },
        ]);
        
      }
      setHistory((prev) => {
  const updated = [...prev];

  updated[0] = {
    ...updated[0],
    answer:
      data.reply ??
      data.project?.description ??
      "",
  };

  localStorage.setItem(
    "history",
    JSON.stringify(updated)
  );

  return updated;
});

      if (data.url) {
        window.open(data.url, "_blank");
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Unable to connect to backend.",
        },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem("history");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const clearHistory = () => {
  localStorage.removeItem("history");

  setHistory([]);

  setMessages([
    {
      sender: "bot",
      type: "text",
      text: `👋 Welcome!

I'm Chinmayee AI, your personal AI portfolio assistant.

Ask me anything about:

🚀 Projects
💻 Skills
🎓 Education
📄 Resume
🏆 Certifications
📬 Contact`,
    },
  ]);
};

  return (
    <Dashboard
      messages={messages}
      input={input}
      loading={loading}
      setInput={setInput}
      handleSend={handleSend}
      history={history}
      clearHistory={clearHistory}
      theme={theme}
      setTheme={setTheme}
    />
  );
}

export default App;