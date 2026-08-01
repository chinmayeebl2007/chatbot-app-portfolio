import GlassCard from "../common/GlassCard";

type Props = {
  onAsk: (question: string) => void;
};

const projects = [
  {
    icon: "🤖",
    title: "JobBridge",
    subtitle: "AI Resume Analyzer",
    tech: "React • Express • MongoDB • Gemini",
    question: "Tell me about JobBridge",
  },
  {
    icon: "📡",
    title: "TeleRAG-X",
    subtitle: "Telecom RAG Assistant",
    tech: "TypeScript • Gemini • RAG",
    question: "Tell me about TeleRAG-X",
  },
  {
    icon: "🎒",
    title: "Lost & Found Portal",
    subtitle: "Campus Management",
    tech: "React • Express • MongoDB",
    question: "Tell me about Lost & Found Portal",
  },
  
];

function FeaturedProjects({ onAsk }: Props) {
  return (
  <section className="featured-projects">

    <div className="page-header">

      <div>
        <h1>🚀 Featured Projects</h1>

        <p>
          Explore my AI, Backend and Full Stack projects.
        </p>
      </div>

    </div>

    <div className="contact-grid">

      {projects.map((project) => (

        <GlassCard
          key={project.title}
          className="project-card"
        >

          <div
            style={{
              fontSize:42,
              marginBottom:18,
            }}
          >
            {project.icon}
          </div>

          <h2>{project.title}</h2>

          <p className="project-title">
            {project.subtitle}
          </p>

          <div
            style={{
              margin:"20px 0",
            }}
          >
            {project.tech
              .split(" • ")
              .map((tech)=>(
                <span
                  key={tech}
                  className="tech-chip"
                  style={{marginRight:8}}
                >
                  {tech}
                </span>
              ))}
          </div>

          <button
            className="project-btn primary"
            onClick={() =>
              onAsk(project.question)
            }
          >
            Ask AI
          </button>

        </GlassCard>

      ))}

    </div>

  </section>
);
}

export default FeaturedProjects;