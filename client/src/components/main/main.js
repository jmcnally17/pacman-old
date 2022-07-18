import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import pic from "./title-pic.jpg";
import "./main.css";
import Game from "./game/game";
import { useEffect } from "react";

let url;
if (process.env.REACT_APP_URL) {
  url = process.env.REACT_APP_URL;
} else {
  url = "http://localhost:9000";
}

export default function Main() {
  const [name, setName] = useState("");
  const [backend, setBackend] = useState("");

  const handleName = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    fetch(`${url}/backend`)
      .then((response) => response.text())
      .then((data) => setBackend(data));
  }, []);

  const handleSubmit = () => {
    if (name === "") {
      window.alert("You must enter a name");
    } else {
      const mainEl = ReactDOM.createRoot(document.getElementById("main"));
      mainEl.render(<Game />);
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
      <p className="backend">{backend}</p>
    </div>
  );
}
