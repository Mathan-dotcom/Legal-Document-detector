import React from "react";

function Scorecard({ score, risk }) {
  const getColor = () => {
    if (risk === "green") return "green";
    if (risk === "yellow") return "goldenrod";
    return "red";
  };

  return (
    <div style={{
      border: `2px solid ${getColor()}`,
      borderRadius: "10px",
      padding: "1rem",
      margin: "1rem auto",
      maxWidth: "300px",
      textAlign: "center"
    }}>
      <h3>Document Score: {score}/100</h3>
      <p style={{ color: getColor(), fontWeight: "bold" }}>
        Risk Level: {risk.toUpperCase()}
      </p>
    </div>
  );
}

export default Scorecard;
