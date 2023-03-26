import React from "react";
import { Link } from "react-router-dom";

const Register = ({ setName, setPassword, handleSubmit }) => {
  return (
    <div className=" bg-gray-100 flex flex-col sm:flex-row  items-center justify-center w-full h-screen">
      <div className=" p-3 sm:my-3">
        <h1 className=" text-4xl font-bold text-blue-500 pb-5">Facebook</h1>
        <p className=" text-gray-600">
          Connect with friends and the world around <br /> you on Facebook
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" mx-2 ">
        <div className=" flex flex-col gap-2 p-5 rounded-md bg-white">
          <input
            type="text"
            placeholder="Username "
            onChange={(e) => setName(e.target.value)}
            className=" p-2 border text-sm active:border-cyan-200 rounded-md "
          />
          <input
            type="text"
            placeholder="Email "
            className=" p-2 border text-sm rounded-md "
          />
          <input
            type="password"
            placeholder="Password "
            onChange={(e) => setPassword(e.target.value)}
            className=" p-2 border text-sm rounded-md "
          />
          <input
            type="password"
            placeholder="Confirm Password "
            className=" p-2 border text-sm rounded-md "
          />
          <button className=" w-3/4 bg-green-500 text-white rounded-md mx-auto py-1 mt-1 text-sm">
            Sing Up
          </button>
          <p>
            <span className=" text-sm text-gray-500">
              Already have an account?
            </span>
            <Link to={"/login"}>
              <button href="" className=" hover:underline ml-1 text-blue-500 ">
                Login
              </button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
