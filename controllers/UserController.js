const resClientData = require("../utils/resClientData");
const User = require("../models/User");
const { SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");

class UserController {
  // [POST] /api/v1/user/auth/login
  async login(req, res) {
    try {
      const { username, password } = req.body;

      if (!(username && password)) {
        throw new Error("All input is required");
      }

      const existingUser = await User.findOne({ username });
      if (!existingUser) {
        throw new Error("User is not existed");
      }

      if (password !== existingUser.password) {
        throw new Error("Invalid credentials");
      }

      const jwtPayload = {
        username: existingUser.username,
        password: existingUser.password,
      };

      const token = jwt.sign(jwtPayload, SECRET_KEY, {
        expiresIn: "12h",
      });

      resClientData(res, 200, token);
    } catch (error) {
      resClientData(res, 400, null, error.message);
    }
  }
}

module.exports = new UserController();
