const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected!');
});

module.exports = connection;
