import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-3 mb-3" onSubmit={handleSubmit}>
      <div className="w-custom relative">
        <input
          type="text"
          className="text-sm rounded-lg block w-full p-2-5 bg-gray-700 border-none"
          placeholder="Send message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center bg-gray-700 border-none send-btn"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
