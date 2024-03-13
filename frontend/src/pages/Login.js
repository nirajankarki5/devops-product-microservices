import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await fetch("http://localhost:4001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setEmail("");
    setPassword("");

    console.log(response.status);

    if (response.status === 201) {
      alert("Account created");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("LOGINNNN");

    const body = { email, password };
    const response = await fetch("http://localhost:4001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    setEmail("");
    setPassword("");

    console.log(response.status);

    if (response.status === 200) {
      localStorage.setItem("userId", data._id);
      navigate("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, []);

  return (
    <form onSubmit={handleLogin} className="form-container">
      <div className="input-section">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-section">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="btn">
        <button onClick={handleSignup}>Signup</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </form>
  );
};

export default Login;
