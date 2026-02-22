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
  create: async (req, res) => {
    try {
      const nome = req.body?.nome;
      const email = req.body?.email;

      if (!nome || !email) {
        return res.status(400).json({ error: "Nome e email são obrigatórios" });
      }

      const userId = await userService.create(req.body);

      return res.status(201).json({ id: userId, nome, email });
    } catch (err) {
      if (err.message.includes("UNIQUE constraint failed: usuarios.email")) {
        return res.status(400).json({ error: "Email já cadastrado" });
      }

      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
