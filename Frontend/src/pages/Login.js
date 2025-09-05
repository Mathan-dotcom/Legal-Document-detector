import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API call for login
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      {/* Video background */}
      <video autoPlay loop muted className="video-bg">
        <source src="/public/background.mp4" type="video/mp4" />
      </video>

      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
