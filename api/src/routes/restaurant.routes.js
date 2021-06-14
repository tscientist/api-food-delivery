// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 */

const router = require("express-promise-router")();
const restaurantController = require("../controllers/restaurant.controller");

// ==> Definindo as rotas do CRUD - 'Client':

// ==> Rota responsável por criar um novo 'Client': (POST): localhost:3000/api/addClient
router.post("/addRestaurant", restaurantController.createRestaurant);

router.get("/restaurant", restaurantController.listAllRestaurants);

router.get("/restaurant/:id", restaurantController.findRestaurantById);

router.put("/restaurant/:id", restaurantController.updateRestaurantById);

router.delete("/restaurant/:id", restaurantController.deleteRestaurantById);

module.exports = router;
