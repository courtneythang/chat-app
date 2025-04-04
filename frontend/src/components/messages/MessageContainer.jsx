import React from "react";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="message-container"> 
    <>
    <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text">To:</span>{" "}
        <span className="font-bold">John Doe</span>
    </div>

    <Messages />
    {/* <MessageInput /> */}
    </>
    </div>
  );
};

export default MessageContainer;
