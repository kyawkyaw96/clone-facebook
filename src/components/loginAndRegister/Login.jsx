import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ name, password }) => {
  const [logName, setLogName] = useState();
  const [logPassword, setLogPassword] = useState();
  const navigate = useNavigate();
  const [invName, setInvName] = useState(false);
  const [invPassword, setInvPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== logName) {
      setInvName(true);
      navigate("/login")

    } else if (password !== logPassword) {
      setInvPassword(true);
      navigate("/login")
    } else if ((name == logName) & (password == logPassword)) {
      navigate("/home");
    }
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center w-full h-screen">
      <div className=" p-3">
        <h1 className=" text-4xl font-bold text-blue-500">Facebook</h1>
        <p>
          Connect with friends and the world around <br /> you on Facebook
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" mx-2">
        <div className=" flex flex-col gap-4 p-8 rounded-md bg-white">
          <input
            type="text"
            placeholder="Username "
            onChange={(e) => setLogName(e.target.value)}
            className=" p-2 border text-sm rounded-md "
          />
           {invName ? (
            <p className=" text-red-500 text-sm my-2">
              Invalid user name !
            </p>
          ) : null}
          <input
            type="password"
            onChange={(e) => setLogPassword(e.target.value)}
            placeholder="Password "
            className=" p-2 border text-sm rounded-md "
          />
           {invPassword ? (
            <p className=" text-red-500 text-sm my-2">
              Invalid password !
            </p>
          ) : null}

          <button className=" w-3/4 bg-blue-500 text-white rounded-md mx-auto py-1 mt-1 text-sm">
            Login
          </button>
          <span className=" text-sm text-gray-400 hover:underline hover:text-black">
            Forget password?
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
