import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Game from "../game/game";
import { Howl } from "howler";

export default function Main() {
  const [name, setName] = useState("");
  const [theme] = useState(
    new Howl({
      src: ["./audio/game_start.wav"],
      loop: true,
      volume: 0.5,
    })
  );

  useEffect(() => {
    theme.play();
    window.addEventListener("keydown", (event) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)
      ) {
        event.preventDefault();
      }
    });
  }, [theme]);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleEnter = (event) => {
    const buttonEl = document.querySelector("#submit-button");
    if (event.key === "Enter") buttonEl.click();
  };

  const handleSubmit = () => {
    if (name === "") {
      window.alert("You must enter a name");
    } else if (name.length > 15) {
      window.alert("Name must be 15 characters or shorter");
    } else {
      theme.pause();
      const reactRoot = ReactDOM.createRoot(document.getElementById("main"));
      reactRoot.render(<Game name={name} reactRoot={reactRoot} />);
    }
  };

  return (
    <div className="main" id="main">
      <h1>Welcome to Pac-Man!</h1>
      <img
        className="title-gif"
        src="https://media4.giphy.com/media/42rO49pxzaMnK/giphy.gif?cid=790b76116dc1bedf27887938cbe8df55b210b12f842af0e9&rid=giphy.gif&ct=g"
        alt="Pac-Man gif"
      />
      <div className="register">
        <label className="label" htmlFor="name-input">
          Enter your name:
        </label>
        <input
          className="input-name"
          id="name-input"
          type="text"
          placeholder="Name"
          onChange={handleName}
          onKeyDown={handleEnter}
        ></input>
        <button
          className="submit-button"
          id="submit-button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
