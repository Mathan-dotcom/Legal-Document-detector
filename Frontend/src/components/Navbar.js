import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>LegalDocs AI</h2>
      <div>
        <Link style={styles.link} to="/">Login</Link>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/upload">Upload</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    background: "#1e293b",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
  },
  link: {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "500",
  },
};

export default Navbar;
