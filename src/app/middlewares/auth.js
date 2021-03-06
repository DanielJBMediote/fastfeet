/* eslint-disable no-unreachable */
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token não encontrado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.privateKey);

    request.userId = decoded.id;

    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Token não encontrado' });
  }

  return next();
};
