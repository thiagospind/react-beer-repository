import axios from "axios";
import { getToken } from "../services/auth";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log("BASE_URL", BASE_URL);

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
