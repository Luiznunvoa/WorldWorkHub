export class UsersService {
  /**
   * @param {AxiosHttpAdapter} httpAdapter - HTTP adapter instance
   */
  constructor(httpAdapter) {
    this.http = httpAdapter;
  }

  async create(userData) {
    return this.http.requestPrivateBackend({
      method: "post",
      url: "/users",
      data: userData,
    });
  }

  async getCurrent() {
    return await this.http.requestPrivateBackend({
      method: "get",
      url: `/current-user`,
      config: { skipAuthRedirect: true },
    });
  }

}
