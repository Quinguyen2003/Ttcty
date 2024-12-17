const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'news'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL completed');
});

module.exports = connection;
