import React from "react";

const Login = () => {
  return (
    <form className="form-container">
      <div class="input-section">
        <label for="email">Email:</label>
        <input type="text" id="email" required />
      </div>

      <div class="input-section">
        <label for="password">Password:</label>
        <input type="password" id="password" required />
      </div>

      <div class="btn">
        <button>Login</button>
      </div>
    </form>
  );
};

export default Login;
