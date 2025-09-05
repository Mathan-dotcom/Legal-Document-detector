import React, { useState } from "react";
import { login } from "../services/api";

const Login = () => {
  const [username, setUsername] = useState(""); // ✅ username state
  const [password, setPassword] = useState(""); // ✅ password state
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }); // ✅ use state values
      localStorage.setItem("token", res.data.token);   // save token
      setMessage("✅ Login successful!");
    } catch (err) {
      setMessage("❌ Invalid credentials");
      console.error(err);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {message && <p style={{ marginTop: "15px", textAlign: "center" }}>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
