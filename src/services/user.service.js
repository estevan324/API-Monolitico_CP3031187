const db = require("../database/db");

const userService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
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
};

module.exports = userService;
