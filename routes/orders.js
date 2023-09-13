const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/OrdersController");

router.get("/description", ordersController.description);

module.exports = router;