import React, { useState } from "react";
import { simplifyDoc, queryDoc, detectSuspicious } from "../services/api";

export default function Upload() {
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const handleSimplify = async () => {
    const res = await simplifyDoc(text);
    setResult(res.simplified);
  };

  const handleQuery = async () => {
    const res = await queryDoc(text, question);
    setResult(res.answer);
  };

  const handleDetect = async () => {
    const res = await detectSuspicious(text);
    setResult(res.suspicious);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Upload / Paste Document</h2>
      <textarea
        className="border p-2 w-full"
        rows={10}
        placeholder="Paste your document text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-3 flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSimplify}>
          Simplify
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleQuery}>
          Ask Question
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDetect}>
          Detect Clauses
        </button>
      </div>

      <input
        className="border p-2 mt-3 w-full"
        placeholder="Enter question (for Q&A)"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <div className="mt-4 border p-4 bg-gray-50 rounded">
        <h3 className="font-semibold">AI Result:</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
}
