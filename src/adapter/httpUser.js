import axios from "axios";
import { requestInterceptor, responseErrorInterceptor } from "./interceptors";

/**
 * AxiosHttpAdapter is an HTTP adapter that leverages Axios to perform API requests.
 *
 * The base URL is read from `import.meta.env.VITE_API_BASE_URL`,
 *  INFO: .env example:
 *   # In the .env at the root directory
 *   VITE_API_BASE_URL=http://localhost:9090
 *
 * The adapter exposes a method `requestPrivateBackend` to make HTTP requests and automatically handle
 * the response data extraction as well as error logging.
 */
export class AxiosHttpAdapter {
  /**
   * Creates an instance of AxiosHttpAdapter.
   * After setting up the instance, it calls the internal method to configure the interceptors.
   */
  constructor() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    this.privateBackendInstance = axios.create({
      baseURL,
      withCredentials: true, // Include cookies
      headers: {
        "Content-Type": "application/json",
      },
    });

    this._setupInterceptors();
  }

  /**
   * Sets up Axios interceptors for the private backend instance.
   *
   * The *request interceptor* (`requestInterceptor`) allows you to modify or enrich outgoing requests
   * (for example, by adding authorization or headers).
   *
   * The *response interceptor* (`responseErrorInterceptor`) is designed to handle errors globally.
   * (for example, in case of error 401(authorization) refreshes the token and tries again)
   */
  _setupInterceptors() {
    this.privateBackendInstance.interceptors.request.use(
      requestInterceptor,
      (error) => Promise.reject(error),
    );

    this.privateBackendInstance.interceptors.response.use(
      (response) => response,
      responseErrorInterceptor(this.privateBackendInstance),
    );
  }

  /**
   * Performs an HTTP request using the private backend Axios instance.
   *
   * @param {Object} config - Axios request configuration object (e.g., { method, url, data }).
   * @returns {Promise<Object>} A promise that resolves to the response data from the API.
   *
   * @throws Will throw an error if the request fails. The thrown error contains either
   *         the data from the response error or a message describing the error.
   */
  async requestPrivateBackend(config) {
    try {
      const response = await this.privateBackendInstance.request(config);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response?.data || error.message;
    }
  }
}
