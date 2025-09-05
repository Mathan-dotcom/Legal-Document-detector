import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Neon cursor setup
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const clickCursor = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 200);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", clickCursor);

    // Fake loading spinner
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", clickCursor);
      cursor.remove();
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
