var mysql = require('mysql2');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '#@Mani468',      // Replace with your database password
  database: 'auth' ,// // Replace with your database Name
  connectTimeout: 300000,
  waitForConnections: true
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
  
});

module.exports = conn;