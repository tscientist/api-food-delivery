const router = require("express-promise-router")();
const clientController = require("../controllers/client.controller");

router.post("/addClient", clientController.createClient);

router.get("/clients", clientController.listAllClients);

router.get("/client/:id", clientController.findClientById);

router.get("/client/:id/order", clientController.getClientWithOrders);

router.put("/client/:id", clientController.updateClientById);

router.delete("/client/:id", clientController.deleteClientById);

module.exports = router;
