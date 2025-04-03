import React from "react";

function Conversation() {
  return (
    <>
      <div className="flex gap-2 items-center rounded py-1">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="User avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">Username</p>
          </div>
        </div>
      </div>

      <div className="divider" />
    </>
  );
}

export default Conversation;
