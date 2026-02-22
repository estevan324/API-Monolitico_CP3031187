const db = require("../database/db");

const userService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM usuarios WHERE status = 'ativo'",
        [],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        },
      );
    });
  },
  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM usuarios WHERE id = ?", [id], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  },
  create: (user) => {
    const { nome, email } = user;

    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
        [nome, email],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        },
      );
    });
  },
  update: (id, user) => {
    const { nome, email } = user;

    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
        [nome, email, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        },
      );
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE usuarios SET status = 'inativo' WHERE id = ?",
        [id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        },
      );
    });
  },
};

module.exports = userService;
