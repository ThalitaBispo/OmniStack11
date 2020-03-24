const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //informa p app que estamos usando json para as requisições
app.use(routes);

/**
 * Rota / Recursos
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados / enviados na rota após "?" (Filtros, paginação)
  * const params = request.query; //acessar todos os parâmetros que vem do query
  * Route Params: Parâmetros usados para identificar recursos
  * const params = request.params; //acessar todos os parâmetros
  * (ex: /users/:id - tudo q vier depois da parra é um id - http://localhost:3333/users/1)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   * 
   * Driver: Select * from users
   * Query Builder: table("users"), select("*"), where()
   */

app.listen(3333); //ouvir a porta