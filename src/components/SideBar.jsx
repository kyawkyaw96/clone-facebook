import React from "react";
import "./scrollBar.css";
import { MdRssFeed, MdGroups2, MdOutlineSchool } from "react-icons/md";
import {
  BsFillChatLeftDotsFill,
  BsFillPlayCircleFill,
  BsFillBookmarkFill,
  BsQuestionCircle,
  BsBriefcase,
  BsCalendarEvent,
} from "react-icons/bs";
import { Users } from "../ApiData";

const SideBar = () => {
  return (
    <div className=" col-span-3 h-[calc(100vh-56px)] overflow-scroll  ">
      <div className="p-10 ">
        <ul className=" flex gap-4 flex-col">
          <li className=" flex">
            <MdRssFeed className=" mr-2" />
            <span>Feed</span>
          </li>
          <li className=" flex">
            <BsFillChatLeftDotsFill className=" mr-2" />
            <span>Chats</span>
          </li>
          <li className=" flex">
            <BsFillPlayCircleFill className=" mr-2" />
            <span>Videos</span>
          </li>
          <li className=" flex">
            <MdGroups2 className=" mr-2" />
            <span>Groups</span>
          </li>
          <li className=" flex">
            <BsFillBookmarkFill className=" mr-2" />
            <span>Bookmarks</span>
          </li>
          <li className=" flex">
            <BsQuestionCircle className=" mr-2" />
            <span>Questions</span>
          </li>
          <li className=" flex">
            <BsBriefcase className=" mr-2" />
            <span>Jobs</span>
          </li>
          <li className=" flex">
            <BsCalendarEvent className=" mr-2" />
            <span>Events</span>
          </li>
          <li className=" flex">
            <MdOutlineSchool className=" mr-2" />
            <span>Courses</span>
          </li>
        </ul>
        <button className=" px-3 py-1 my-3 rounded-sm bg-slate-200">
          Show More
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
              <span>{user?.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
