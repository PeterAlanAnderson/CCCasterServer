import './login.scss';
import React, { useState } from 'react';
import { sendAuth } from '../services/clientAuthService';

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    sendAuth(userName, password);
  };

  return (
    <div className="login-container">
      <label for="uname">
        <b>Username</b>
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(x) => setUserName(x.target.value)}
        name="username"
        required
      />

      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(x) => setPassword(x.target.value)}
        name="password"
        required
      />

      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
    </div>
  );
};

export default Login;
