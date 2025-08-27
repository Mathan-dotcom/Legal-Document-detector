import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`Uploaded: ${file.name} (placeholder - backend not connected yet)`);
    } else {
      alert("Please select a file first");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={styles.button}>Upload</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "#1e293b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Upload;
