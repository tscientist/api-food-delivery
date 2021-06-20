const router = require("express-promise-router")();
const itemController = require("../controllers/item.controller");

router.post("/addItem", itemController.createItem);

router.get("/items", itemController.listAllItems);

router.get("/item/:id", itemController.findItemById);

router.put("/item/:id", itemController.updateItemById);

router.delete("/item/:id", itemController.deleteItemById);

module.exports = router;
