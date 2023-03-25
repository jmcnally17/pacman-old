import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

let url;
if (process.env.REACT_APP_URL) {
  url = `${process.env.REACT_APP_URL}/users`;
} else {
  url = "http://localhost:9000/users";
}

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
          navigate("/");
        } else {
          throw response;
        }
      })
      .catch((err) => setError(err.statusText));
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <div className="border">
        <input placeholder="Username" onChange={handleUsername}></input>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        ></input>
        <br></br>
        <button onClick={handleSubmit}>Register</button>
        <p className="error-message">{error}</p>
      </div>
    </div>
  );
}
