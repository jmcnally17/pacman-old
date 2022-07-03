import React from "react";
import pic from "./title-pic.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Pacman!</h1>
      <img className="title-pic" src={pic} />
      <div className="register">
        <label className="label" htmlFor="name-input">
          Enter your name:
        </label>
        <input
          className="input"
          id="name-input"
          type="text"
          placeholder="Name"
        ></input>
        <button className="submit-button">Submit</button>
      </div>
      <footer>
        <p className="footer-text">
          Please don&apos;t threaten to sue me Bandai Namco. I&apos;m making
          this for my portfolio. No money is being made from this project.
          Don&apos;t be like Nintendo.
        </p>
      </footer>
    </div>
  );
}
