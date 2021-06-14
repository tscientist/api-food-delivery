// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 */

const router = require("express-promise-router")();
const clientController = require("../controllers/client.controller");

// ==> Definindo as rotas do CRUD - 'Client':

// ==> Rota responsável por criar um novo 'Client': (POST): localhost:3000/api/addClient
router.post("/addClient", clientController.createClient);

router.get("/client", clientController.listAllClients);

router.get("/client/:id", clientController.findClientById);

router.put("/client/:id", clientController.updateClientById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete("/client/:id", clientController.deleteClientById);

module.exports = router;
