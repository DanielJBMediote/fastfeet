// Importar do Express
import express from 'express';

// Importar o arquivo de routes.js
import routes from './routes';

// Import database
import './database';
/**
 * Classe utilizada para manipular meu server
 * contém o objeto 'server', que é manipulado pelo Express
 */
class App {
  /**
   * Método contrutor que será executado assim que a classe for instânciada,
   * ele é responsável por chamar os métos de routes e middlewares.
   */
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Define que o 'server' passa a manipular JSON
    this.server.use(express.json());
  }

  routes() {
    // Define que o 'server' utilizará as rotas
    this.server.use(routes);
  }
}

// Exportar apenas o objeto 'server' da classe App
export default new App().server;
