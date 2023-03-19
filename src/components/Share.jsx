import React from "react";
import {
  MdAddPhotoAlternate,
  MdLocationOn,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
const Share = () => {
  return (
    <div className=" w-full h-36 ">
      <div className=" border-sm shadow-lg p-4">
        <div className=" flex gap-4">
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/335040885_3039189736377925_4833158108769635834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aAFBpxrmyMwAX_MBNFZ&_nc_ht=scontent-sin6-3.xx&oh=00_AfC1sSrXZSicLrzhYEYD6Avm616jJIteENDxIiavBIfo_w&oe=641B7DB7"
            className=" w-8 h-8 rounded-full"
            alt=""
          />
          <input
            type="text"
            placeholder="What's in your mind?"
            className=" focus:outline-0"
            name=""
            id=""
          />
        </div>
        <hr className=" my-3" />
        <div className=" flex justify-between items-center gap-2">
          <div className=" flex gap-1 my-3 items-center">
            <MdAddPhotoAlternate className=" text-blue-400 text-2xl" />
            <span className=" text-xs">Photo or Video</span>
          </div>
          <div className=" flex gap-1 my-3 items-center">
            <AiFillTag className=" text-blue-500 text-2xl" />
            <span className=" text-xs">Tag</span>
          </div>
          <div className=" flex gap-1 my-3 items-center">
            <MdLocationOn className=" text-green-400 text-2xl" />
            <span className=" text-xs">Location</span>
          </div>
          <div className=" flex gap-1 my-3 items-center mr-2">
            <MdOutlineEmojiEmotions className=" text-orange-400 text-2xl" />
            <span className=" text-xs">Feeling</span>
          </div>
          <button className=" rounded-md bg-green-400 text-white text-sm px-2 py-1">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
