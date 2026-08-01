type Project = {
  name: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  github: string;
  status: string;
};

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  const openGithub = () => {
    console.log("GitHub URL:", project.github);

    if (!project.github) {
      alert("GitHub URL is missing.");
      return;
    }

    window.open(project.github, "_blank");
  };

  return (
    <div className="project-card">
      <div className="project-top">
        <div>
          <span className="project-badge">
            FEATURED PROJECT
          </span>

          <h2>{project.name}</h2>

          <p className="project-title">
            {project.title}
          </p>
        </div>

        <span className="project-status">
          {project.status}
        </span>
      </div>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-grid">
        <div className="project-box">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>

        <div className="project-box">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>
      </div>

      <div className="project-section">
        <h3>Key Features</h3>

        <div className="feature-grid">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="feature-card"
            >
              ✓ {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h3>Technology Stack</h3>

        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="tech-chip"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <button
          type="button"
          className="project-btn primary"
          onClick={openGithub}
        >
          GitHub
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;