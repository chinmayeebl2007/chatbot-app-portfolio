import {
  GitBranch,
  FileText,
  FolderKanban,
  Globe,
} from "lucide-react";

type Props = {
  onAsk: (question: string) => void;
};

const actions = [
  {
    icon: <FileText size={24} />,
    title: "Resume",
    description: "View my latest resume",
    question: "Show me your resume",
  },
  {
    icon: <GitBranch size={24} />,
    title: "GitHub",
    description: "Browse my repositories",
    question: "Open your GitHub",
  },
  {
    icon: <Globe size={24} />,
    title: "LinkedIn",
    description: "Professional profile",
    question: "Open your LinkedIn",
  },
  {
    icon: <FolderKanban size={24} />,
    title: "Projects",
    description: "Explore my work",
    question: "Show me your projects",
  },
];

function QuickActions({ onAsk }: Props) {
  return (
    <section className="quick-actions">

      {actions.map((action) => (

        <button
          key={action.title}
          className="quick-card"
          onClick={() => onAsk(action.question)}
        >

          <div className="quick-icon">
            {action.icon}
          </div>

          <div className="quick-content">

            <h3>{action.title}</h3>

            <p>{action.description}</p>

          </div>

        </button>

      ))}

    </section>
  );
}

export default QuickActions;