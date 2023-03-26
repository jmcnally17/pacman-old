import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { Profanity, ProfanityOptions } from "@2toad/profanity";

const options = new ProfanityOptions();
options.wholeWord = false;
const profanity = new Profanity(options);

const url = process.env.REACT_APP_URL
  ? `${process.env.REACT_APP_URL}/users`
  : "http://localhost:9000/users";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsername = ({ target }) => {
    setUsername(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = () => {
    let nameError = document.getElementById("error-message");
    if (username === "") {
      nameError.innerText = "You must enter a name";
    } else if (username.includes(" ")) {
      nameError.innerText = "Name cannot contain any spaces";
    } else if (username.length < 3 || username.length > 15) {
      nameError.innerText = "Name must be 3-15 characters long";
    } else if (profanity.exists(username)) {
      nameError.innerText = "No profanity!";
    } else {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => {
          if (response.ok) {
            navigate("/login");
          } else {
            throw response;
          }
        })
        .catch((err) => setError(err.statusText));
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <div className="border">
        <input placeholder="Username" onChange={handleUsername}></input>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        ></input>
        <br></br>
        <button onClick={handleSubmit}>Sign up</button>
        <p className="error-message" id="error-message">
          {error}
        </p>
      </div>
    </div>
  );
}
