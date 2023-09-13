const ordersRouter = require("./orders");
const inventoryRouter = require("./inventory");
const userRouter = require("./user");
const auth = require("../middlewares/auth");

function route(app) {
  app.use("/api/v1/user", userRouter);

  app.use(auth);

  app.use("/api/v1/orders", ordersRouter);
  app.use("/api/v1/inventory", inventoryRouter);
}

module.exports = route;
