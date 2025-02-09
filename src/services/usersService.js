export class UsersService {
  /**
   * @param {AxiosHttpAdapter} httpAdapter - HTTP adapter instance
   */
  constructor(httpAdapter) {
    this.http = httpAdapter;
  }

  /**
   * Creates a new user
   * @param {Object} userData - User data
   * @returns {Promise<Object>} - Created user
   */
  async create(userData) {
    return this.http.requestPrivateBackend({
      method: "post",
      url: "/users",
      data: userData,
    });
  }

  /**
   * Validates login credentials and stores authentication token
   * @param {Object} credentials - Login credentials
   * @param {string} credentials.email - User email
   * @param {string} credentials.password - User password
   * @returns {Promise<Object>} - User data with token
   */
  async login(credentials) {
    const response = await this.http.requestPrivateBackend({
      method: "post",
      url: "/login",
      data: credentials,
    });
    return response;
  }

  /**
   * Gets the data of a user by it's id
   * @param {string} accessToken - A valid accessToken
   * @param {string} id - User id
   * @returns {Promise<Object>} - User data
   */
  async getById(accessToken, id) {
    const response = await this.http.requestPrivateBackend({
      method: "post",
      url: `/user/${id}`,
      headers: {
        authorization: accessToken,
      },
    });
    return response.token;
  }
}
