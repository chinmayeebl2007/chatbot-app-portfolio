type Props = {
  onSelect: (question: string) => void;
};

const questions = [
  {
    icon: "🚀",
    text: "Show me your best project",
  },
  {
    icon: "🤖",
    text: "Explain TeleRAG-X",
  },
  {
    icon: "📄",
    text: "Show me your resume",
  },
  {
    icon: "⚙️",
    text: "What are your backend skills?",
  },
  {
    icon: "🎓",
    text: "Tell me about yourself",
  },
  {
    icon: "📂",
    text: "Open your GitHub",
  },
];

function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="suggestions">

      {questions.map((question) => (
        <button
          key={question.text}
          className="suggestion-card"
          onClick={() => onSelect(question.text)}
        >
          <span className="suggestion-icon">
            {question.icon}
          </span>

          <span className="suggestion-text">
            {question.text}
          </span>
        </button>
      ))}

    </div>
  );
}

export default SuggestedQuestions;