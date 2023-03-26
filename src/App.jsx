import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/loginAndRegister/Login";
import Register from "./components/loginAndRegister/Register";
import React, { useState } from "react";

import Home from "./pages/Home";
import RightBar from "./components/RightBar";

const App = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const user = [];
  // console.log(name, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    user.push(...user, { name: name, password: password });
    navigate(`/login`);
    // console.log(user);
  };
  return (
    <div className="font-sans hide-scrollbar">
      <Routes>
        <Route
          path="/"
          element={
            <Register
              setName={setName}
              handleSubmit={handleSubmit}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login 
              name={name} 
              password={password} 
            />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/rightBar" element={<RightBar />} />


      </Routes>
    </div>
  );
};

export default App;
