import { useEffect, useRef } from "react";
import { Bot, User } from "lucide-react";
import ProjectCard from "../cards/ProjectCard";

type Project = {
  name: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  github: string;
  demo: string;
  status: string;
};

type Message = {
  sender: "user" | "bot";
  text: string;
  type?: "text" | "project";
  project?: Project;
};

type Props = {
  messages: Message[];
  loading: boolean;
};

function ChatWindow({
  messages,
  loading,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="chat-window">

      {messages.length === 0 && (
        <div className="chat-empty">

          <div className="chat-empty-icon">
            <Bot size={52} />
          </div>

          <h2>Welcome 👋</h2>

          <p>
            Ask me anything about my projects,
            backend development, AI, education,
            certifications or experience.
          </p>

        </div>
      )}

      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat-row ${message.sender}`}
        >

          <div className="chat-avatar">

            {message.sender === "bot" ? (
              <Bot size={20} />
            ) : (
              <User size={20} />
            )}

          </div>

          <div className="chat-body">

            <div className="chat-info">

              <strong>
                {message.sender === "bot"
                  ? "Chinmayee AI"
                  : "You"}
              </strong>

              <span>
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>

            </div>

            <div
              className={`chat-card ${message.sender}`}
            >

              {message.type === "project" &&
              message.project ? (
                <ProjectCard
                  project={message.project}
                />
              ) : (
                <p>{message.text}</p>
              )}

            </div>

          </div>

        </div>
      ))}

      {loading && (
        <div className="chat-row bot">

          <div className="chat-avatar">
            <Bot size={20} />
          </div>

          <div className="typing-card">

            <span></span>
            <span></span>
            <span></span>

          </div>

        </div>
      )}

      <div ref={bottomRef} />

    </div>
  );
}

export default ChatWindow;