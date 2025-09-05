import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API call for signup
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      {/* Video background */}
      <video autoPlay loop muted className="video-bg">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;


