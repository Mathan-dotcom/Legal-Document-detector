import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>
      <p>Here you’ll see all your documents, risk scores, and status colors.</p>

      <div style={styles.card}>
        <h4>Sample Agreement</h4>
        <p>Status: <span style={{ color: "red" }}>High Risk</span></p>
      </div>
      <div style={styles.card}>
        <h4>Employment Contract</h4>
        <p>Status: <span style={{ color: "green" }}>Safe</span></p>
      </div>

      {/* 🚀 Innovative Buttons Section */}
      <div style={styles.buttonContainer}>
        <button style={styles.gradientButton} onClick={() => navigate("/upload")}>
          📂 Upload New Document
        </button>
        <button style={styles.glassButton} onClick={() => alert("Performing secure analysis...")}>
          🔒 Secure Analysis
        </button>
        <button style={styles.neonButton} onClick={() => navigate("/dashboard")}>
          ⚡ Refresh Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  card: {
    padding: "15px",
    marginTop: "10px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  gradientButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(45deg, #4facfe, #00f2fe)",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  glassButton: {
    padding: "10px 20px",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(6px)",
    color: "#333",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  neonButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "black",
    color: "#00ffcc",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 0 5px #00ffcc, 0 0 15px #00ffcc",
    transition: "transform 0.2s ease",
  },
};

export default Dashboard;
