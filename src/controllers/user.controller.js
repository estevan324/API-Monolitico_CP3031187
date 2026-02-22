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
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.status(200).json(user);
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
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await userService.getById(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      const nome = req.body?.nome;
      const email = req.body?.email;

      if (!nome || !email) {
        return res.status(400).json({ error: "Nome e email são obrigatórios" });
      }

      await userService.update(id, req.body);

      return res.status(200).json({ id, nome, email });
    } catch (err) {
      if (err.message.includes("UNIQUE constraint failed: usuarios.email")) {
        return res.status(400).json({ error: "Email já cadastrado" });
      }

      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
