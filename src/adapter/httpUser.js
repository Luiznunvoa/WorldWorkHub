import axios from "axios";
import { requestInterceptor, responseErrorInterceptor } from "./interceptors";

export class AxiosHttpAdapter {
  constructor() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    this.privateBackendInstance = axios.create({
      baseURL,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this._setupInterceptors();
  }

  _setupInterceptors() {
    // Request interceptor
    this.privateBackendInstance.interceptors.request.use(
      requestInterceptor,
      (error) => Promise.reject(error)
    );

    // Response interceptor com injeção da instância
    this.privateBackendInstance.interceptors.response.use(
      (response) => response,
      responseErrorInterceptor(this.privateBackendInstance)
    );
  }

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
