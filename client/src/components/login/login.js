import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const url = process.env.REACT_APP_URL
  ? `${process.env.REACT_APP_URL}/sessions`
  : "http://localhost:9000/sessions";

export default function Login() {
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
      .catch((err) => {
        setError(err.statusText);
      });
  };

  return (
    <div className="login">
      <h1>Log In</h1>
      <div className="border">
        <input placeholder="Username" onChange={handleUsername}></input>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        ></input>
        <br></br>
        <button onClick={handleSubmit}>Log in</button>
        <p className="error-message">{error}</p>
      </div>
    </div>
  );
}
