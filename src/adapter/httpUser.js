import axios from "axios";

export class AxiosHttpAdapter {
  constructor() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    // Creates a customized Axios instance for the private backend
    this.privateBackendInstance = axios.create({
      baseURL,
      "Content-Type": "application/json",
    });

    // Sets up interceptors for authentication
    this._setupInterceptors();
  }

  /**
   * Sets up interceptors to include the authentication token
   * and handle global errors
   */
  _setupInterceptors() {
    // Request interceptor to add the JWT token
    this.privateBackendInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response interceptor for global error handling
    this.privateBackendInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Custom error handling (e.g., redirect to login)
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
          window.location.href = "/login"; // Redirect to login
        }
        return Promise.reject(error);
      },
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
      // Local error handling
      console.error("Request error:", error);
      throw error.response?.data || error.message;
    }
  }
}
