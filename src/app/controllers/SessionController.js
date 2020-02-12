/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    // Buscar usuário da tabela de acordo com o email
    const user = await User.findOne({ where: { email } });

    // Verificar se existe este email na tabela
    if (!user) {
      return response.status(401).json({ error: 'Usuário não encontrado.' });
    }
    // Verificar se a senha bate com o usuario buscado na tabela
    if (!(password && (await user.checkPassword(password)))) {
      return response.status(401).json({ error: 'Senha inválida' });
    }

    const { id, name } = user;

    // Criar um token de autênticação
    const token = jwt.sign({ id }, authConfig.privateKey, {
      expiresIn: authConfig.expireIn,
      algorithm: authConfig.algorithm,
    });

    return response.json({
      id,
      name,
      email,
      token,
    });
  }
}

export default new SessionController();
