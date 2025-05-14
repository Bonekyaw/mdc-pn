import axios from "axios";

import { API_URL } from "@/config";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// api.interceptors.request.use()
// api.interceptors.response.use()

export default api;
