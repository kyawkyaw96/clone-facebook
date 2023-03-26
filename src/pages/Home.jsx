import React from "react";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className=" flex md:grid md:grid-cols-12 ">
        <SideBar />
        <Profile />
      </div>
    </div>
  );
};

export default Home;
