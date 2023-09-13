const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/InventoryController");

router.get("/all", inventoryController.all);

module.exports = router;