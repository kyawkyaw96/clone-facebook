import React from "react";
import Feed from "./Feed";
import RightBar from "./RightBar";

const Profile = () => {
  return (
    <div className=" col-span-9 h-[calc(100vh-56px)] w-full overflow-y-scroll">
      <div className="flex flex-col items-center m-3">
        <div className=" w-full h-60">
          <img
            src="public/assets/kali-linux-wallpaper-preview.jpg"
            className=" w-full h-60"
            alt=""
          />
        </div>
        <div className="  overflow-hidden mt-[-70px]">
          <img
            src="public/assets/IMG-3c625859b35f55254f202fc6fc688f1c-V.jpg"
            className="w-36 h-36 border-4 border-white rounded-full object-center"
            alt=""
          />
        </div>
        <h1 className=" font-bold my-2 text-lg">Kyaw Kyaw</h1>
        <p className=" tracking-wider ">
          Silence is better than unmeaning words
          
        </p>
      </div>
      <div className=" grid grid-cols-3 mt-8">
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Profile;
