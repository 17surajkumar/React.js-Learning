import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { use } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // Value to add the data therefore setUser is used
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, password }); //This is how the data is send using the setData and the context api passing both username and password using the login page
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {"  "}
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

// The main idea is to learn how to fetch the data from the user context
