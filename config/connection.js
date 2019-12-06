// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3307,
//   user: "root",
//   password: "IcedMocha4",
//   database: "burgers_db"
// });

// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   port: 3307,
//   user: "b567962c81a386",
//   password: "a1c90610",
//   database: "burgers_db"
// });
var connection = mysql.createConnection(
  "mysql://b567962c81a386:a1c90610@us-cdbr-iron-east-05.cleardb.net/heroku_d78b89924f508fc?reconnect=true"
);
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
