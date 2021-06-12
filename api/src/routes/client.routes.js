// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 */

 const router = require('express-promise-router')();
 const clientController = require('../controllers/client.controller');
 
 // ==> Definindo as rotas do CRUD - 'Client':
 
 // ==> Rota responsável por criar um novo 'Client': (POST): localhost:3000/api/addClient
 router.post('/addClient', clientController.createClient);
 
 module.exports = router;