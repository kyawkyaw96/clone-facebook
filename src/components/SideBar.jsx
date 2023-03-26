import React from "react";
import "./scrollBar.css";
import { MdRssFeed, MdGroups2, MdSchool } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  BsFillChatLeftDotsFill,
  BsFillPlayCircleFill,
  BsFillBookmarkFill,
  BsQuestionCircle,
  BsFillBriefcaseFill,
  BsFillCalendar2DayFill,
} from "react-icons/bs";
import { Users } from "../ApiData";

const SideBar = () => {
  return (
    <div className=" md:col-span-3 h-[calc(100vh-56px)] overflow-scroll  ">
      <div className="md:p-10 p-3 ">
        <ul className=" flex gap-4 flex-col">
          <li className=" flex">
            <MdRssFeed className=" mr-2 text-indigo-600" />
            <span className=" hidden md:inline-block">Feed</span>
          </li>
          <li className=" flex">
            <BsFillChatLeftDotsFill className=" mr-2 text-rose-500" />
            <span className=" hidden md:inline-block">Chats</span>
          </li>
          <li className=" flex">
            <BsFillPlayCircleFill className=" mr-2 text-blue-600" />
            <span className=" hidden md:inline-block">Videos</span>
          </li>
          <li className=" flex">
            <MdGroups2 className=" mr-2 text-blue-500" />
            <span className=" hidden md:inline-block">Groups</span>
          </li>
          <li className=" flex">
            <BsFillBookmarkFill className=" mr-2 text-pink-500" />
            <span className=" hidden md:inline-block">Bookmarks</span>
          </li>
          <li className=" flex">
            <BsQuestionCircle className=" mr-2 text-blue-600 font-bold" />
            <span className=" hidden md:inline-block">Questions</span>
          </li>
          <li className=" flex">
            <BsFillBriefcaseFill className=" mr-2 text-orange-500" />
            <span className=" hidden md:inline-block">Jobs</span>
          </li>
          <li className=" flex">
            <BsFillCalendar2DayFill className=" mr-2 text-red-400" />
            <span className=" hidden md:inline-block">Events</span>
          </li>
          <li className=" flex">
            <MdSchool className=" mr-2 text-blue-500" />
            <span className=" hidden md:inline-block">Courses</span>
          </li>
        </ul>
        <button className=" px-3 py-1 my-3 rounded-sm hidden md:inline-block bg-slate-200">
          <span className=" ">Show More</span>
        </button>
        <button className="md:hidden mt-3">
          <FiMoreHorizontal />
        </button>
        <hr className=" my-3" />
        <div className=" my-3">
          {Users.map((user) => (
            <div key={user?.id} className=" flex items-center gap-2 mb-3">
              <img
                src={user?.profilePicture}
                className=" w-8 h-8 rounded-full"
                alt=""
              />
              <span className=" hidden md:inline-block">{user?.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
