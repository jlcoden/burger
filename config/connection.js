// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "IcedMocha4",
    database: "burgers_db"
  });
}

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
