import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { Users } from "../ApiData";

const Post = ({ p }) => {
  const [like, setLike] = useState(p?.like);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLike(liked ? like - 1 : like + 1);
    setLiked(!liked);
  };
  const nn=Users.filter(u => u.id === p?.userId)[0].username
  console.log(nn);
  return (
   
        <div className=" my-5 w-full rounded-md shadow-md p-3">
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-2">
              <img src={p?.photo} className=" w-8 h-8 rounded-full" alt="" />
              <span className=" font-bold"> {nn}</span>
              <span className=" font-thin text-sm">{p?.date}</span>
            </div>
            <FiMoreVertical />
          </div>
          <div className=" my-3">
            <h1>{p?.desc}</h1>
            <img
              src={p?.photo}
              className=" w-full h-[400px] mt-2 object-cover"
              alt=""
            />
          </div>
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <div className=" w-5 h-5 flex items-center justify-center rounded-full hover:scale-105 hover:translate-y-[-4px] bg-blue-400">
                <AiFillLike
                  onClick={handleLike}
                  className=" text-sm text-white "
                />
              </div>
              <div className=" w-5 h-5 flex items-center justify-center rounded-full hover:scale-105 bg-red-400 hover:translate-y-[-4px]">
                <AiFillHeart
                  onClick={handleLike}
                  className=" text-sm text-white "
                />
              </div>
              <span className=" text-sm">{like} people like it</span>
            </div>
            <span>{p?.comment} comments</span>
          </div>
        </div>
      
  );
};

export default Post;
