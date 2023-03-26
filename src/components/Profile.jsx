import React, { useState } from "react";
import Feed from "./Feed";
import RightBar from "./RightBar";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";

const Profile = () => {
  const [show, setShow] = useState(false);
  const showToggle = () => {
    setShow(!show);
  };
  return (
    <div className=" col-span-9 h-[calc(100vh-56px)] w-full overflow-y-scroll">
      <div className="flex flex-col items-center m-3">
        <div className=" w-full h-60">
          <img
            src="https://i.postimg.cc/B6z4YFZ6/331913513-748386013566373-8683688952064742324-n.jpg"
            className=" w-full h-60 object-cover"
            alt=""
          />
        </div>
        <div className="  overflow-hidden mt-[-70px]">
          <img
            src="https://i.postimg.cc/13yXNp8h/335040885-3039189736377925-4833158108769635834-n.jpg"
            className="w-36 h-36 border-4 border-white rounded-full object-center"
            alt=""
          />
        </div>
        <h1 className=" font-bold my-2 text-lg">Kyaw Kyaw</h1>
        <p className=" tracking-wider ">
          Silence is better than unmeaning words
        </p>
      </div>
      <div className="md:hidden grid sm:grid-cols-3 mt-8">
        <div className="sm:hidden font-thin mt-3 text-center text-sm">
          <b className=" text-gray-400">Nwe Ni</b> and <b className=" text-gray-400">2 other friends </b>have a birthday today.
          <button
            onClick={showToggle}
            className="block mx-auto mt-2 px-3 py-1 text-gray-500 rounded-sm bg-gray-100 hover:font-bold"
          >
            Show
          </button>
        </div>
        {show ? (
          <RightBar />
        ) : (
          <>
            <Feed />
          </>
        )}
      </div>
      <div className="hidden md:grid sm:grid-cols-3 mt-8">
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Profile;
