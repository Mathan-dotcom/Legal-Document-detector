import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || "http://localhost:5000/api",
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// AUTH
export async function login({ username, password }) {
  const { data } = await API.post("/auth/login", { username, password });
  if (data?.token) localStorage.setItem("token", data.token);
  return data;
}

// DOCS
export async function uploadDocument(file) {
  const form = new FormData();
  form.append("file", file);
  const { data } = await API.post("/docs/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
}

export async function listDocuments() {
  const { data } = await API.get("/docs");
  return data;
}

// AI
export async function simplifyDoc(text) {
  const { data } = await API.post("/ai/simplify", { text });
  return data;
}

export async function queryDoc(text, query) {
  const { data } = await API.post("/ai/query", { text, query });
  return data;
}

export async function detectSuspicious(text) {
  const { data } = await API.post("/ai/detect", { text });
  return data;
}
