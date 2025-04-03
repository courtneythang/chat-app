import React from "react";
import Conversation from "./Conversation";

function Conversations() {
  return (
    <div className="flex flex-col overflow-auto p-2 py-1 cursor-pointer">
      <Conversation />
    </div>
  );
}

export default Conversations;
