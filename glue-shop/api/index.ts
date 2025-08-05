import { useAuthStore } from "@/store/authStore";
import axios from "axios";

export const authApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

let isRefreshing = false;
let failedRequestQueue: {
  resolve: () => void;
  reject: (error: unknown) => void;
}[] = [];

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    if (status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            resolve: () => resolve(api(originalRequest)),
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      const store = useAuthStore.getState();
      try {
        const { refreshToken, randomToken, accessToken } = store;
        const { data } = await axios.post(
          process.env.EXPO_PUBLIC_BASE_URL + "refresh-token",
          {
            refreshToken,
            randToken: randomToken,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        store.setAccessToken({
          accessToken: data.token,
          refreshToken: data.refreshToken,
          randomToken: data.randToken,
        });

        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        failedRequestQueue.forEach((request) => request.resolve());
        failedRequestQueue = [];

        return api(originalRequest);
      } catch (error) {
        store.logout();
        failedRequestQueue.forEach((request) => request.reject(error));
        failedRequestQueue = [];
        // throw error;
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  },
);

export default api;
