import React, { useState } from "react";
import {
  uploadDocument,
  simplifyDoc,
  queryDoc,
  detectSuspicious,
} from "../services/api";
import Scorecard from "../components/Scorecard";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState(""); // pasted text for demo AI
  const [question, setQuestion] = useState("");
  const [simplified, setSimplified] = useState("");
  const [answer, setAnswer] = useState("");
  const [risk, setRisk] = useState(null);
  const [score, setScore] = useState(null);
  const [msg, setMsg] = useState("");

  const handleUpload = async () => {
    if (!file) return setMsg("Please choose a file");
    try {
      const res = await uploadDocument(file);
      setMsg(`Uploaded: ${res.fileName} (id: ${res.documentId})`);
    } catch (e) {
      setMsg("Upload failed");
    }
  };

  const handleSimplify = async () => {
    const { simplified } = await simplifyDoc(text);
    setSimplified(simplified);
  };

  const handleQuery = async () => {
    const { answer } = await queryDoc(text, question);
    setAnswer(answer);
  };

  const handleDetect = async () => {
    const { score, risk } = await detectSuspicious(text);
    setScore(score);
    setRisk(risk);
  };

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h2>Upload & Analyze</h2>

      <div style={{ border: "1px solid #ddd", padding: 16, marginBottom: 16 }}>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button onClick={handleUpload} style={{ marginLeft: 8 }}>Upload</button>
        <div style={{ marginTop: 8 }}>{msg}</div>
      </div>

      <div style={{ border: "1px solid #ddd", padding: 16 }}>
        <h3>Demo AI on pasted text</h3>
        <textarea
          rows={6}
          style={{ width: "100%" }}
          placeholder="Paste legal text here for demo analysis..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div style={{ marginTop: 12 }}>
          <button onClick={handleSimplify}>Simplify</button>
          <input
            style={{ marginLeft: 8 }}
            placeholder="Ask a question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button onClick={handleQuery} style={{ marginLeft: 8 }}>
            Ask
          </button>
          <button onClick={handleDetect} style={{ marginLeft: 8 }}>
            Detect Risks
          </button>
        </div>

        {simplified && (
          <div style={{ marginTop: 12 }}>
            <h4>Simplified</h4>
            <div style={{ whiteSpace: "pre-wrap" }}>{simplified}</div>
          </div>
        )}

        {answer && (
          <div style={{ marginTop: 12 }}>
            <h4>Answer</h4>
            <div>{answer}</div>
          </div>
        )}

        {score !== null && risk && (
          <div style={{ marginTop: 12 }}>
            <Scorecard score={score} risk={risk} />
          </div>
        )}
      </div>
    </div>
  );
}
