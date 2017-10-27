var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin#123",
  database: 'myapplication'
});

con.connect(function(err) {
  if (err) throw err;
});