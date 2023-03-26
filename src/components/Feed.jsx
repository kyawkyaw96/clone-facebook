import React from "react";
import Post from "./Post";
import Share from "./Share";
import { Posts } from "../ApiData";

const Feed = () => {
  return (
    <div className=" p-5 sm:col-span-2 w-full ">
      <Share />

      {Posts.map((p) => (
        <Post key={p?.id} p={p} />
      ))}
    </div>
  );
};

export default Feed;
