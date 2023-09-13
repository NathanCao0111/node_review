const resClientData = require("../utils/resClientData");
const Order = require("../models/Order");

class OrdersController {
  // [GET] /api/v1/orders/description
  async description(req, res) {
    try {
      const ordersWithDescription = await Order.aggregate([
        {
          $lookup: {
            from: "inventories",
            localField: "item",
            foreignField: "sku",
            as: "inventory_docs",
          },
        },
      ]);
      resClientData(res, 200, ordersWithDescription);
    } catch (error) {
      resClientData(res, 400, null, error.message);
    }
  }
}

module.exports = new OrdersController();
