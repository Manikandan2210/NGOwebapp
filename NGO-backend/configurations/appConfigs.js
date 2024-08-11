const mysql = require('mysql2');
const app =  {
    port: 3000,
    appName: "VedhaSoftTec",
    env: "development",
    server: "localhost"
}
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#@Mani468',
  database: 'vedhasoft',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});
module.exports = {connection,app};