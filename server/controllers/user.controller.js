const userService = require("../services/user.service");

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await userService.getAll();

      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
