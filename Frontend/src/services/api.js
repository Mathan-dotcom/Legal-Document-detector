import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// ========== AUTH ==========
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);

// ========== DOCUMENTS ==========
export const uploadDocument = (formData, token) =>
  API.post("/docs/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

export const simplifyDoc = (docId, token) =>
  API.post(
    `/ai/simplify/${docId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

export const queryDoc = (docId, query, token) =>
  API.post(
    `/ai/query/${docId}`,
    { query },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

export const detectSuspicious = (docId, token) =>
  API.post(
    `/ai/detect/${docId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
