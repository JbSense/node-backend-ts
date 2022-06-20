/**
 * Represents response.
 */
class Response {
  readonly status: any;
  data: any;
  error: any;

  /**
   * @param {object} data request data.
   * @param {string} error request error.
   */
  constructor() {
    this.status = {
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      BadRequest: 400,
      Unauthorized: 401,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
    };
    this.data = null;
    this.error = null;
  }

  /**
   * Set data.
   * @param {object} data response data.
   */
  setData(data: object): void {
    this.data = data;
  }

  /**
   * Set error.
   * @param {string} error request error.
   */
  setError(error: any): void {
    this.error = error;
  }

  /**
   * Build response.
   * @param {string} status response status.
   * @return {object} response.
   */
  buildResponse(status: string): object {
    return {
      status: this.status[status],
      data: this.data,
      error: this.error,
    };
  }
}

export default Response;
