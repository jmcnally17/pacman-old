import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import pic from "./title-pic.jpg";
import "./main.css";
import Game from "./game/game";

export default function Main() {
  const [name, setName] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)
      ) {
        event.preventDefault();
      }
    });
  }, []);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleSubmit = () => {
    if (name === "") {
      window.alert("You must enter a name");
    } else if (name.length > 15) {
      window.alert("Name must be 15 characters or shorter");
    } else {
      const mainEl = ReactDOM.createRoot(document.getElementById("main"));
      mainEl.render(<Game name={name} mainEl={mainEl} />);
    }
  };

  return (
    <div className="main" id="main">
      <div id="login">
        <h1>Welcome to Pac-Man!</h1>
        <img className="title-pic" src={pic} alt="" />
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
          ></input>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
