import { useState } from "react";

import Sidebar from "./Sidebar";
import Hero from "./Hero";
import FeaturedProjects from "../layout/FeaturedProjects";
import SuggestedQuestions from "../chat/SuggestedQuestions";
import ChatWindow from "../chat/ChatWindow";
import ChatInput from "../chat/ChatInput";

import HistoryPage from "../pages/HistoryPage";
import ContactPage from "../pages/ContactPage";
import SettingsPage from "../pages/SettingsPage";

type Message = {
  sender: "user" | "bot";
  text: string;
  type?: "text" | "project";
  project?: any;
};

type Props = {
  messages: Message[];
  input: string;
  loading: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: (question?: string) => void;

  history: any[];
  clearHistory: () => void;

  theme: "light" | "dark";
  setTheme: React.Dispatch<
    React.SetStateAction<"light" | "dark">
  >;
};

function Dashboard({
  messages,
  input,
  loading,
  setInput,
  handleSend,
  history,
  clearHistory,
  theme,
  setTheme,
}: Props) {
  const [active, setActive] =
    useState("dashboard");

  return (
    <div className="workspace">

      <Sidebar
        active={active}
        setActive={setActive}
      />

      <main className="workspace-main">

        {active === "dashboard" && (
          <>
            <Hero />

            <section className="chat-workspace">

              <div className="workspace-header">

                <h2>
                  Ask Chinmayee AI
                </h2>

                <p>
                  Ask anything about my projects,
                  backend development,
                  AI, resume,
                  education or certifications.
                </p>

              </div>

              <SuggestedQuestions
                onSelect={handleSend}
              />

              <div className="workspace-chat">

                <ChatWindow
                  messages={messages}
                  loading={loading}
                />

              </div>

              <ChatInput
                input={input}
                setInput={setInput}
                onSend={() =>
                  handleSend()
                }
                disabled={loading}
              />

            </section>
          </>
        )}

        {active === "history" && (
          <HistoryPage
  history={history}
  onAskAgain={(question) => {
    setActive("dashboard");
    setTimeout(() => {
      handleSend(question);
    }, 100);
  }}
  clearHistory={clearHistory}
/>
        )}

{active === "projects" && (
  <FeaturedProjects
    onAsk={handleSend}
  />
)}

        {active === "resume" && (
          <section className="page-card">

            <h1>📄 Resume</h1>

            <button
              className="hero-primary"
              onClick={() =>
                window.open(
                  "http://localhost:5000/resume",
                  "_blank"
                )
              }
            >
              Open Resume
            </button>

          </section>
        )}

        {active === "contact" && (
          <ContactPage />
        )}

        {active === "settings" && (
          <SettingsPage
            theme={theme}
            setTheme={setTheme}
            clearHistory={clearHistory}
          />
        )}

      </main>

    </div>
  );
}

export default Dashboard;