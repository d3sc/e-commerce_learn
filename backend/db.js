const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL not ready, retrying in 5s...", err.message);
    setTimeout(connectWithRetry, 5000);
  } else {
    console.log("Database connected!");
  }
});

module.exports = connection;
