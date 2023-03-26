import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Game from "../game/game";
import { Howl } from "howler";
import { Profanity, ProfanityOptions } from "@2toad/profanity";

const options = new ProfanityOptions();
options.wholeWord = false;
const profanity = new Profanity(options);

export default function Main({ reactRoot, user }) {
  const [name, setName] = useState("");
  const [theme] = useState(
    new Howl({
      src: ["./audio/title_theme.wav"],
      loop: true,
      volume: 0.3,
    })
  );

  useEffect(() => {
    theme.play();
    window.addEventListener("keydown", (event) => {
      if (["ArrowUp", "ArrowDown"].includes(event.code)) {
        event.preventDefault();
      }
    });
  }, [theme]);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleEnter = (event) => {
    const buttonEl = document.querySelector("#play-button");
    if (event.key === "Enter") buttonEl.click();
  };

  const handleSubmit = () => {
    let nameError = document.getElementById("name-error");
    if (name === "") {
      nameError.innerText = "You must enter a name";
    } else if (name.includes(" ")) {
      nameError.innerText = "Name cannot contain any spaces";
    } else if (name.length < 3 || name.length > 15) {
      nameError.innerText = "Name must be 3-15 characters long";
    } else if (profanity.exists(name)) {
      nameError.innerText = "No profanity!";
    } else {
      theme.pause();
      if (reactRoot) {
        reactRoot.render(<Game name={name} reactRoot={reactRoot} />);
      } else {
        const root = ReactDOM.createRoot(document.getElementById("subRoot"));
        root.render(<Game name={name} reactRoot={root} />);
      }
    }
  };

  return (
    <div className="main" id="main">
      {user ? (
        <h1>Welcome back {user.username}!</h1>
      ) : (
        <h1>Welcome to Pac-Man!</h1>
      )}
      <a href="/login">
        <button className="login-button">Log in</button>
      </a>
      <a href="/signup">
        <button className="signup-button">Sign up</button>
      </a>
      <br></br>
      <br></br>
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
        <button className="play-button" id="play-button" onClick={handleSubmit}>
          Play
        </button>
      </div>
      <p className="name-error" id="name-error"></p>
      <p className="instructions">
        Use the directional keys to move Pac-Man around the board while avoiding
        the ghosts as best you can. Pick up a power up and then attack the
        ghosts! Eat all the pellets on the board to level up. Press esc to pause
        and unpause the game at any time. (For mobile and tablet users, a D-pad
        will appear below the board for you to move Pac-Man around)
      </p>
    </div>
  );
}
