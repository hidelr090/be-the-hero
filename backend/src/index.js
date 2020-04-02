/**
 * Métodos HTTP:
 * 
 * get: busca uma informação do backend
 * post: cria uma informação no backend
 * put: faz uma alteração no backend
 * delete: apaga
 */

/**
 * Tipos de parametros:
 * 
 * Query parms:  Parametros nomeados enviados na rota após o simbolo de '?' e geralmente servem para filtros,
 * paginação
 * 
 * Route parms: Parametros utilizados para identificar recursos
 * 
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * BANCOS DE DADOS:
 * SQL: MYSQL...
 * NO SQL: MONGODB...
 */

/**
 * DRIVER: SELECT * FROM 
 * QUERY BUILDER: table('users').select('*')
 */
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3388);