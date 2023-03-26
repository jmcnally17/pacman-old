import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import Signup from "./components/signup/signup";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

export default function App() {
  return (
    <div className="App">
      <div id="subRoot">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
