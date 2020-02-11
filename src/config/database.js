/*
Exportar as configurações do banco de dados que está sendo utilizado, neste
caso o Postgres, ele é passado como parâmentro na chave 'dialect', bem como
outras chaves como host, port, user, password e database.
*/
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'dbFastFeet',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
