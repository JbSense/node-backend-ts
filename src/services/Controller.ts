import Response from "./Response";

// Controllers import.
import UserController from "../controllers/UserController";

/**
 * Represents controller.
 */
class Controller {
  readonly controllers: object;
  controller: string;
  method: string;
  params: any;

  /**
   * @param {string} controller
   * @param {string} method
   * @param {string} params
   */
  constructor(controller: string, method: string, params: any = null) {
    this.controller = controller;
    this.method = method;
    this.params = JSON.stringify(params);

    // Necessary to inform each new controller created.
    this.controllers = {
      UserController: UserController,
    };
  }

  /**
   * Call the method on the controller.
   */
  async callMethod() {
    // eslint-disable-next-line no-unused-vars
    const controller = this.controllers;
    const response = new Response();

    try {
      if (this.params != {}) {
        const resultCallMethodController = await eval(`
          controller[this.controller].${this.method}(${this.params})
        `);
        response.setData(resultCallMethodController);
      } else {
        const resultCallMethodController = await eval(`
          controller[this.controller].${this.method}()
        `);
        response.setData(resultCallMethodController);
      }

      return response.buildResponse("Ok");
    } catch (error: any) {
      response.setError(error.message);
      return response.buildResponse("BadRequest");
    }
  }
}

export default Controller;
