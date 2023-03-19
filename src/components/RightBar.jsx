import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import RightBarOnline from "./RightBarOnline";
import {Users} from "../ApiData"
const RightBar = () => {
  return (
    <div className=" col-span-1">
      <div className=" p-3">
        <div className=" flex ">
          <FaBirthdayCake className=" text-red-400 text-4xl" />
          <p className=" font-thin">
            <b>Nwe Ni</b> and <b>2 other friends </b>have a birthday today.
          </p>
        </div>
        <img
          src="public/assets/_.jpeg"
          alt=""
          className=" w-full h-[300px] rounded-md my-3"
        />
        <h1>Online Friends</h1>
        <hr className=" my-3" />

        <div>
          {
            Users.map(user=>(
              <RightBarOnline key={user?.id} user={user}/>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RightBar;
