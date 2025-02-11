import axios from "axios";
import { useSessionStore } from "../stores/sessionStore";

export const requestInterceptor = (config) => {
  if (config.url === "/refresh-token") {
    return config;
  }

  const token = useSessionStore.getState().accessToken;
  if (token) {
    config.headers.authorization = `${token}`;
  }
  return config;
};

export const responseErrorInterceptor = (axiosInstance) => {
  return async (error) => {
    const originalRequest = error.config;
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    if (
      error.response?.status === 401 &&
      !originalRequest._isRetry &&
      originalRequest.url !== "/refresh-token"
    ) {
      originalRequest._isRetry = true;

      try {
        const refreshClient = axios.create({
          baseURL,
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });

        const refreshResponse = await refreshClient.post("/refresh-token");
        const newToken = refreshResponse.data.access_token;

        useSessionStore.getState().setState({ accessToken: newToken });

        originalRequest.headers.authorization = newToken;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        useSessionStore.getState().reset();
        console.error(refreshError);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    if (error.response?.status === 401) {
      useSessionStore.getState().reset();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  };
};
