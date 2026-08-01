import {
  Clock,
  RotateCcw,
  Trash2,
  MessageCircle,
} from "lucide-react";

type HistoryItem = {
  id: number;
  question: string;
  answer: string;
  time: string;
};

type Props = {
  history: HistoryItem[];
  onAskAgain: (question: string) => void;
  clearHistory: () => void;
};

function HistoryPage({
  history,
  onAskAgain,
  clearHistory,
}: Props) {
  return (
    <section className="page-card">
      <div className="page-header">
        <div>
          <h1>💬 Chat History</h1>
          <p>All your previous conversations.</p>
        </div>

        <button
          className="delete-btn"
          onClick={clearHistory}
        >
          <Trash2 size={18} />
          <span>Clear</span>
        </button>
      </div>

      {history.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px 0",
          }}
        >
          <MessageCircle
            size={70}
            color="#6366F1"
          />

          <h2
            style={{
              marginTop: 20,
            }}
          >
            No conversations yet
          </h2>

          <p>
            Start chatting with Portfolio AI.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 25,
          }}
        >
          {history.map((item) => (
            <div
              key={item.id}
              className="history-item"
            >
              <div className="history-row">
                <div className="history-content">
                  <h3>{item.question}</h3>

                  <div className="history-time">
                    <Clock size={15} />
                    <span>{item.time}</span>
                  </div>
                </div>

                <button
                  className="history-btn"
                  onClick={() =>
                    onAskAgain(item.question)
                  }
                >
                  <RotateCcw size={17} />
                  <span>Ask Again</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default HistoryPage;