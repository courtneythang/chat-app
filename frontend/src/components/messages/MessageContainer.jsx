import React, { useEffect } from "react";
import Messages from "./Messages";
import "../../index.css";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../store/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // unmounts the selected conversation
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="message-container">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2">
            <span className="label-text">To:</span>{" "}
            <span className="font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center text-adj font-semibold flex flex-col items-center gap-2">
        <TiMessages className="text-3xl text-center" />
        <p>Welcome, select a chat to start messaging</p>
      </div>
    </div>
  );
};

export default MessageContainer;
