const resClientData = require("../utils/resClientData");
const Inventory = require("../models/Inventory");

class InventoryController {
  // [GET] /api/v1/inventory/all
  async all(req, res) {
    try {
      const { instock } = req.query;
      const query = {};

      if (instock) {
        query.instock = { $lt: instock };
      }

      const allProducts = await Inventory.find(query);
      resClientData(res, 200, allProducts);
    } catch (error) {
      resClientData(res, 400, null, error.message);
    }
  }
}

module.exports = new InventoryController();
