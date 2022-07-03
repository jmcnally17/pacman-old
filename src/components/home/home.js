import React from "react";
import pic from "./title-pic.jpg";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Pac-Man!</h1>
      <img className="title-pic" src={pic} />
      <div className="register">
        <label className="label" htmlFor="name-input">
          Enter your name:
        </label>
        <input
          className="input-name"
          id="name-input"
          type="text"
          placeholder="Name"
        ></input>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}
