export class SessionService {
  /**
   * @param {AxiosHttpAdapter} httpAdapter - HTTP adapter instance
   */
  constructor(httpAdapter) {
    this.http = httpAdapter;
  } 

  async start(credentials) {
    return await this.http.requestPrivateBackend({
      method: "post",
      url: "/login",
      data: credentials,
      credentials: true,
    });
  }

  async end() {
    await this.http.requestPrivateBackend({
      method: "post",
      url: `/logout`, 
      credentials: true,
    });
  }

  async refresh() {
    return await this.http.requestPrivateBackend({
      method: "post",
      url: `/refresh-token`,
      credentials: true,
    });
  }
}
