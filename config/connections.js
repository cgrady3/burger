// Set up MySQL connection.
var mysql = require("mysql");
var connection;
//var JAWS_URL = 'mysql://w1tzf14fb80yqk7v:ohxiw2okh9kddnsf@blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gn8frimh9j39wfjg';

if (process.env.JAWS_URL) {
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
  connection = mysql.createConnection({
    host: "blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "w1tzf14fb80yqk7v",
    password: "ohxiw2okh9kddnsf",
    database: "gn8frimh9j39wfjg"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;