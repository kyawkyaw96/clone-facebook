import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

const TopBar = () => {
  return (
    <nav className=" grid grid-cols-12 justify-center items-center bg-blue-500 p-3 top-0 sticky">
      <div className=" col-span-3 ">
        <span className=" text-2xl pl-3 font-bold text-white">Facebook</span>
      </div>
      <div className=" col-span-5 ">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1"
            placeholder="Search for friend, post or video"
            required
          />
        </div>
      </div>
      <div className=" col-span-4 flex justify-between px-3 text-white items-center">
        <div className=" ">
          <span className=" mr-2">Homepage</span>
          <span className="">Timeline</span>
        </div>
        <div className=" flex justify-center items-center gap-1">
          <div className=" relative">
            <BsFillPersonFill className=" text-2xl" />
            <span className="  text-xs absolute w-3.5 h-3.5 items-center top-[-5px] right-[-5px] flex justify-center bg-red-500 text-white rounded-full">
              1
            </span>
          </div>
          <div className=" relative">
            <BiMessageDetail className=" text-2xl" />
            <span className="text-xs absolute w-3.5 h-3.5 items-center top-[-5px] right-[-5px] flex justify-center bg-red-500 text-white rounded-full">
              1
            </span>
          </div>
          <div className=" relative">
            <IoMdNotifications className=" text-2xl" />
            <span className="text-xs absolute w-3.5 h-3.5 items-center top-[-5px] right-[-5px] flex justify-center bg-red-500 text-white rounded-full">
              1
            </span>
          </div>
        </div>
        <img
          src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/335040885_3039189736377925_4833158108769635834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aAFBpxrmyMwAX_MBNFZ&_nc_ht=scontent-sin6-3.xx&oh=00_AfC1sSrXZSicLrzhYEYD6Avm616jJIteENDxIiavBIfo_w&oe=641B7DB7"
          alt=""
          className=" w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default TopBar;
