const mysql = require("mysql2");
const { DB_HOST, DB_USER, DB_PASSWORD, DB, DB_PORT } = process.env;

const connexion = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB,
});

module.exports = connexion;
