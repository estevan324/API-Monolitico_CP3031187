const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./database.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log("Connected to the database.");
});

db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'ativo',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
