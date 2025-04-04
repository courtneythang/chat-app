import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const pfp = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleType = fromMe
    ? "chat-bubble-custom-send chat-bubble-custom-send::before"
    : "chat-bubble-custom-receive chat-bubble-custom-receive::before";

  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind css chat bubble component" src={pfp} />
        </div>
      </div>
      <div className={`${bubbleType}`}>{message.message}</div>
      <div className="chat-footer text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
