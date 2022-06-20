import User from "../models/User";

/**
 * Represents user model.
 */
class UserController {
  /**
   * Get user.
   * @return {string} user.
   */
  async getUsers(): Promise<any[]> {
    return await User.findAll();
  }

  /**
   * Set user.
   * @param {object} data data.
   * @return {strin}
   */
  setUser(data: any): string {
    const name = data.name;
    const lastName = data.lastName;

    return "Users: " + name + " " + lastName;
  }
}

export default new UserController();
