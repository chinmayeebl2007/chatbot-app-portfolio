import {
  Moon,
  Sun,
  Trash2,
  Download,
  GitBranch,
} from "lucide-react";

type Props = {
  theme: "light" | "dark";
  setTheme: (
    theme: "light" | "dark"
  ) => void;
  clearHistory: () => void;
};

function SettingsPage({
  theme,
  setTheme,
  clearHistory,
}: Props) {
  return (
    <section className="page-card">

      <div className="page-header">

        <div>
          <h1>⚙️ Settings</h1>
          <p>
            Customize your Portfolio AI.
          </p>
        </div>

      </div>

      <div className="settings-grid">

        <div className="setting-card">

          <h3>Appearance</h3>

          <p>
            Switch between light and dark mode.
          </p>

          <div
            style={{
              display:"flex",
              gap:12,
              marginTop:20,
            }}
          >

            <button
              className={`setting-btn ${
                theme === "light"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setTheme("light")
              }
            >
              <Sun size={18}/>
              Light
            </button>

            <button
              className={`setting-btn ${
                theme === "dark"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setTheme("dark")
              }
            >
              <Moon size={18}/>
              Dark
            </button>

          </div>

        </div>

        <div className="setting-card">

          <h3>Resume</h3>

          <p>
            Download the latest resume.
          </p>

          <button
            className="setting-btn"
            style={{marginTop:20}}
            onClick={() =>
              window.open(
                "http://localhost:5000/resume",
                "_blank"
              )
            }
          >
            <Download size={18}/>
            Resume
          </button>

        </div>

        <div className="setting-card">

          <h3>GitHub</h3>

          <p>
            Visit all source code.
          </p>

          <button
            className="setting-btn"
            style={{marginTop:20}}
            onClick={() =>
              window.open(
                "https://github.com/chinmayeebl2007",
                "_blank"
              )
            }
          >
            <GitBranch size={18}/>
            GitHub
          </button>

        </div>

        <div className="setting-card">

          <h3>Clear History</h3>

          <p>
            Remove all saved conversations.
          </p>

          <button
            className="delete-btn"
            style={{marginTop:20}}
            onClick={()=>{
              if(window.confirm("Delete chat history?")){
                clearHistory();
              }
            }}
          >
            <Trash2 size={18}/>
            Delete
          </button>

        </div>

      </div>

    </section>
  );
}

export default SettingsPage;