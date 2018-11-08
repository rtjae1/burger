var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "wkc8ii8hhdf0togj",
    password: "n6zhrzljrm6jq0lw",
    database: "nsmo5i5pwnkhwnfq"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;