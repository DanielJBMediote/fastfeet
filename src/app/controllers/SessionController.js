/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(request, response) {
    // const { email, password } = request.body;
    return response.json(request.body);
  }
}

export default new SessionController();
