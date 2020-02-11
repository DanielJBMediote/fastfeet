// Importar apenas o modulo Router da biblioteca Express
import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

// Instânciar as rotas
const routes = new Router();

// Rota de teste
routes.get('/', (req, res) => res.json({ message: 'HelloWorld' }));

routes.post('/sessions', SessionController.store);

// Exportar o arquivo routes.js
export default routes;
