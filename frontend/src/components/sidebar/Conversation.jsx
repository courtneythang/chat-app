import React from "react";
import useConversation from "../../store/useConversation";

function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center rounded py-1 mx-1 ${
          isSelected ? "bg-slate-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="User avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation;
