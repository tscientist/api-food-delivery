// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 */

const router = require("express-promise-router")();
const addressController = require("../controllers/address.controller");

// ==> Definindo as rotas do CRUD - 'Address':

// ==> Rota responsável por criar um novo 'Address': (POST): localhost:3000/api/addAddress
router.post("/addAddress", addressController.createAddress);

// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get("/address", addressController.listAllAddress);

router.get("/address/:id", addressController.findAddressById);

router.put("/address/:id", addressController.updateAddressById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete("/address/:id", addressController.deleteAddressById);

module.exports = router;
