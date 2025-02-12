import axios from "axios";
import { useSessionStore } from "../stores/sessionStore";

/**
 * Request Interceptor
 * Its main purpose is to attach the authorization token to requests,
 * except for the refresh-token endpoint to avoid circular dependencies.
 *
 * @param {Object} config - The Axios request configuration object.
 * @returns {Object} The modified Axios request configuration.
 */
export const requestInterceptor = (config) => {
  // Skip token attachment for the refresh-token endpoint to prevent infinite loops.
  if (config.url === "/refresh-token") {
    return config;
  }

  // Retrieve the current access token from the session store.
  const token = useSessionStore.getState().accessToken;

  // If a token exists, add it to the request's authorization header.
  if (token) {
    config.headers.authorization = `${token}`;
  }

  // Return the updated configuration.
  return config;
};

/**
 * Response Error Interceptor
 * This interceptor handles errors in the responses globally.
 * In particular, it intercepts 401 Unauthorized errors and attempts to refresh
 * the token if the request hasn't been retried yet. If the token refresh fails,
 * it resets the session and redirects the user to the login page.
 *
 * @param {Object} axiosInstance - The Axios instance used to retry the original request.
 * @returns {Function} An asynchronous function to handle response errors.
 */
export const responseErrorInterceptor = (axiosInstance) => {
  return async (error) => { 
    const originalRequest = error.config; // original request configuration from the error object.
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    if (
      error.response?.status === 401 &&
      !originalRequest._isRetry &&
      originalRequest.url !== "/refresh-token"
    ) {
      // Mark the request as having been retried to prevent infinite loops.
      originalRequest._isRetry = true;

      try {
        // Create a new Axios instance for the purpose of refreshing the token.
        // This instance is configured similarly to the main instance.
        const refreshClient = axios.create({
          baseURL,
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });

        // Attempt to obtain a new access token from the refresh-token endpoint.
        const refreshResponse = await refreshClient.post("/refresh-token");
        const newToken = refreshResponse.data.access_token;

        // Update the session store with the new token.
        useSessionStore.getState().setState({ accessToken: newToken });

        // Update the authorization header of the original request with the new token.
        originalRequest.headers.authorization = newToken;

        // Retry the original request using the updated configuration.
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        useSessionStore.getState().reset();
        console.error(refreshError);
        alert("Unexpected Error" + refreshError.message)
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // If the error status is 401 and no specific handling is applicable,
    if (error.response?.status === 401) {
      useSessionStore.getState().reset();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  };
};
;
