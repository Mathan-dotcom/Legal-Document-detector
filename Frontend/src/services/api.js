const API_URL = "http://localhost:5000/api";

export const simplifyDoc = async (text) => {
  const res = await fetch(`${API_URL}/ai/simplify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
};

export const queryDoc = async (text, question) => {
  const res = await fetch(`${API_URL}/ai/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, question }),
  });
  return res.json();
};

export const detectSuspicious = async (text) => {
  const res = await fetch(`${API_URL}/ai/detect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
};
