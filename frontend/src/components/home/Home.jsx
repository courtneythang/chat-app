import React from "react";
import Sidebar from "../sidebar/Sidebar";
import MessageContainer from "../messages/MessageContainer";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
