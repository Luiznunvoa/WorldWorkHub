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
   * Retrieves a specific user by ID
   * @param {string} userId - User ID
   * @returns {Promise<Object>} - User data
   */
  // async getUser(userId) {
  //   return this.http.requestPrivateBackend({
  //     method: "get",
  //     url: `/users/${userId}`,
  //   });
  // }

  /**
   * Lists all users
   * @param {Object} [params] - Filtering/pagination parameters
   * @returns {Promise<Array>} - List of users
   */
  // async getAllUsers(params = {}) {
  //   return this.http.requestPrivateBackend({
  //     method: "get",
  //     url: "/users",
  //     params, // Query parameters (e.g., ?page=2&limit=10)
  //   });
  // }

  /**
   * Updates an existing user
   * @param {string} userId - User ID
   * @param {Object} updateData - Data for update
   * @returns {Promise<Object>} - Updated user
   */
  // async editUser(userId, updateData) {
  //   return this.http.requestPrivateBackend({
  //     method: "patch", // Or 'put' depending on the API
  //     url: `/users/${userId}`,
  //     data: updateData,
  //   });
  // }

  /**
   * Deletes a user
   * @param {string} userId - User ID
   * @returns {Promise<void>}
   */
  // async deleteUser(userId) {
  //   return this.http.requestPrivateBackend({
  //     method: "delete",
  //     url: `/users/${userId}`,
  //   });
  // }
}
