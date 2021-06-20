const router = require("express-promise-router")();
const orderController = require("../controllers/order.controller");

router.post("/addOrder", orderController.createOrder);

router.get("/orders", orderController.listAllOrders);

router.get("/order/:id", orderController.findOrderById);

router.get("/order/:id/item", orderController.getOrderWithItem);

router.put("/order/:id", orderController.updateOrderById);

router.delete("/order/:id", orderController.deleteOrderById);

module.exports = router;
