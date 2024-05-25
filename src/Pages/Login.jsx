import React, { useState } from "react";
import Hero from "../Component/Hero/Hero";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Assuming you have user data stored in session storage for this example
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <Hero />
      <h1 style={{ marginTop: "11rem", textAlign: "center", fontSize: "40px" }}>
        Login
      </h1>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
