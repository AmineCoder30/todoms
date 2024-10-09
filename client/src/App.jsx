import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singin from "./pages/Singin";
import { ToastContainer } from "react-toastify";
import Todos from "./pages/Todos";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="w-full h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singin" element={<Singin />} />
      </Routes>
    </div>
  );
}

export default App;
