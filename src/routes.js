// Importar apenas o modulo Router da biblioteca Express
import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';
// Instânciar as rotas
const routes = new Router();

// Rota de teste
routes.get('/', (req, res) => res.json({ message: 'HelloWorld' }));

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/recipients', RecipientController.store);

// Exportar o arquivo routes.js
export default routes;
