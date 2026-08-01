import GlassCard from "../common/GlassCard";

function Hero() {
  return (
    <GlassCard className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          ✨ Personal AI Portfolio Assistant
        </div>

        <h1>
          Hi, I'm
          <br />
          <span>Chinmayee AI</span>
        </h1>

        <p className="hero-subtitle">
          AI & Data Science Undergraduate
        </p>

        <p className="hero-description">
          I build intelligent backend systems,
          AI-powered applications, REST APIs and
          full-stack products using React,
          TypeScript, Node.js, Express,
          MongoDB and Gemini AI.
        </p>

        <div className="hero-buttons">

          <button
            className="hero-primary"
            onClick={() =>
              window.open(
                "http://localhost:5000/resume",
                "_blank"
              )
            }
          >
            📄 Resume
          </button>

          <button
            className="hero-secondary"
            onClick={() =>
              window.open(
                "https://github.com/chinmayeebl2007",
                "_blank"
              )
            }
          >
            🐙 GitHub
          </button>

          <button
            className="hero-secondary"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/chinmayee-b-l-2160b2366",
                "_blank"
              )
            }
          >
            💼 LinkedIn
          </button>

          <button
            className="hero-secondary"
            onClick={() =>
              document
                .querySelector(".chat-workspace")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            💬 Start Chat
          </button>

        </div>

        <div className="hero-stats">

          <div className="hero-stat">
            <h2>8+</h2>
            <p>Projects</p>
          </div>

          <div className="hero-stat">
            <h2>15+</h2>
            <p>Skills</p>
          </div>

          <div className="hero-stat">
            <h2>9.54</h2>
            <p>CGPA</p>
          </div>

          <div className="hero-stat">
            <h2>5+</h2>
            <p>Hackathons</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-illustration">

          <div className="hero-avatar">
            🤖
          </div>

          <div className="floating-card one">
            ⚛ React
          </div>

          <div className="floating-card two">
            ✨ Gemini AI
          </div>

          <div className="floating-card three">
            🚀 Node.js
          </div>

        </div>

        <div className="hero-status-card">

          <h3>Assistant Status</h3>

          <div className="online-status">
            🟢 Online
          </div>

          <p>
            Ready to answer questions about
            projects, skills, education,
            certifications and experience.
          </p>

        </div>

      </div>

    </GlassCard>
  );
}

export default Hero;