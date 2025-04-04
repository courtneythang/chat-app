import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto ">
      <BiLogOut
        className="w-6 h-6 cursor-pointer text-white"
        onClick={logout}
      />
    </div>
  );
};

export default LogoutButton;
