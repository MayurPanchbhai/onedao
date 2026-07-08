/** @format */

import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { DataProvider } from "./Context/Datacontext";
import { Dashboard } from "./Pages/Dashbord";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
