import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import Signup from "./components/signup/signup";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <div id="subRoot">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/registration" element={<Signup />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
