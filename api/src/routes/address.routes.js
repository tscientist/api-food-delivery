const router = require("express-promise-router")();
const addressController = require("../controllers/address.controller");

router.post("/addAddress", addressController.createAddress);

router.get("/address", addressController.listAllAddress);

router.get("/address/:id", addressController.findAddressById);

router.put("/address/:id", addressController.updateAddressById);

router.delete("/address/:id", addressController.deleteAddressById);

module.exports = router;
