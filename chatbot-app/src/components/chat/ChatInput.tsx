import { SendHorizonal } from "lucide-react";

type Props = {
  input: string;
  setInput: React.Dispatch<
    React.SetStateAction<string>
  >;
  onSend: () => void;
  disabled: boolean;
};

function ChatInput({
  input,
  setInput,
  onSend,
  disabled,
}: Props) {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="chat-input-wrapper">

      <div className="chat-input">

        <input
          type="text"
          value={input}
          placeholder="Ask me about my projects, skills, education..."
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />

        <button
          className="send-btn"
          onClick={onSend}
          disabled={disabled}
        >
          <SendHorizonal size={20} />
        </button>

      </div>

    </div>
  );
}

export default ChatInput;