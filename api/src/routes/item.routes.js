// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 */

const router = require("express-promise-router")();
const itemController = require("../controllers/item.controller");

// ==> Definindo as rotas do CRUD - 'Address':

// ==> Rota responsável por criar um novo 'Address': (POST): localhost:3000/api/addAddress
router.post("/addItem", itemController.createItem);

module.exports = router;
