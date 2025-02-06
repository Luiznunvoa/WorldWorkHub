import axios from "axios";
import { useUserStore } from "../stores/userStore";

export class AxiosHttpAdapter {
  constructor() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    // Creates a customized Axios instance for the private backend
    this.privateBackendInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Sets up interceptors for authentication and global error handling
    this._setupInterceptors();
  }

  /**
   * Sets up interceptors to include the authentication token
   * and handle global errors
   */
  _setupInterceptors() {
    // Request interceptor to add the JWT token from the store
    this.privateBackendInstance.interceptors.request.use(
      (config) => {
        const token = useUserStore.getState().accessToken; // Get token from the store
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor for global error handling
    this.privateBackendInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // If the status is 401 (unauthorized), clear the token and redirect to login
        if (error.response?.status === 401) {
          useUserStore.getState().reset(); // Clear token from the store
          window.location.href = "/login"; // Redirect to login page
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Generic method for authenticated requests
   * @param {Object} config - Request configuration
   * @param {string} config.method - HTTP method (get, post, etc.)
   * @param {string} config.url - API endpoint
   * @param {Object} [config.data] - Request body data
   * @param {Object} [config.headers] - Additional headers
   * @returns {Promise<Object>} - API response
   */
  async requestPrivateBackend({ method, url, data = null, headers = {} }) {
    try {
      const response = await this.privateBackendInstance.request({
        method,
        url,
        data,
        headers: {
          ...headers,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Request error:", error);
      throw error.response?.data || error.message;
    }
  }
}
