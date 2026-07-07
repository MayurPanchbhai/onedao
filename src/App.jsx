/** @format */

import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Verify } from "./Pages/Verify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Verify />} />
      </Routes>
    </>
  );
}

export default App;
