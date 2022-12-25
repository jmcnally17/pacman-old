import React from "react";
import "./App.css";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <div id="subRoot">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
