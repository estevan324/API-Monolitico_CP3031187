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
};

module.exports = userService;
