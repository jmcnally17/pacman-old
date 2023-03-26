import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import Signup from "./components/signup/signup";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

const url = process.env.REACT_APP_URL
  ? `${process.env.REACT_APP_URL}/sessions`
  : "http://localhost:9000/sessions";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(url, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
      });
  }, []);

  return (
    <div className="App">
      <div id="subRoot">
        <Routes>
          <Route path="/" element={<Main user={user} />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
