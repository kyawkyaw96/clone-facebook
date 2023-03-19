import React from "react";

const RightBarOnline = ({user}) => {
  return (
    <div className=" flex items-center gap-3 my-3">
      <div className=" relative">
        <img
          src={user?.profilePicture}
          className=" w-8 h-8 rounded-full "
          alt=""
        />
        <span className=" absolute bg-green-500 w-3 h-3 rounded-full mt-[-32px] ml-6 border-white border-2"></span>
      </div>
      <h1>{user?.username}</h1>
    </div>
  );
};

export default RightBarOnline;
