import GlassCard from "../common/GlassCard";

type Props = {
  active: string;
  setActive: (page: string) => void;
};

const menu = [
  {
    id: "dashboard",
    icon: "🏠",
    title: "Dashboard",
  },
  {
    id: "history",
    icon: "💬",
    title: "History",
  },
  {
    id: "projects",
    icon: "🚀",
    title: "Projects",
  },
  {
    id: "resume",
    icon: "📄",
    title: "Resume",
  },
  {
    id: "contact",
    icon: "📬",
    title: "Contact",
  },
  {
    id: "settings",
    icon: "⚙️",
    title: "Settings",
  },
];

function Sidebar({
  active,
  setActive,
}: Props) {
  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="sidebar-brand">

          <div className="sidebar-logo">
            🤖
          </div>

          <div>

            <h2>Chinmayee AI</h2>

            <p>
              Personal Portfolio Assistant
            </p>

          </div>

        </div>

        <nav className="sidebar-nav">

          {menu.map((item) => (

            <button
              key={item.id}
              className={`sidebar-link ${
                active === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActive(item.id)
              }
            >

              <span className="nav-icon">
                {item.icon}
              </span>

              <span>
                {item.title}
              </span>

            </button>

          ))}

        </nav>

      </div>

      <GlassCard className="sidebar-footer">

        <h3>Portfolio AI</h3>

        <p>
          Powered by Gemini 2.5 Flash
        </p>

        <div className="storage-bar">

          <div className="storage-fill"></div>

        </div>

        <button
          className="upgrade-btn"
          onClick={() =>
            window.open(
              "https://github.com/chinmayeebl2007",
              "_blank"
            )
          }
        >
          ⭐ View GitHub
        </button>

      </GlassCard>

    </aside>
  );
}

export default Sidebar;