const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.post("/auth/login", userController.login);

module.exports = router;
