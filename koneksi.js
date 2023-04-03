const mysql = require('mysql');

//buat koneksi db
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbrestapi',
});

//error handling
conn.connect((err) => {
  if (err) throw err;
  console.log('Database Successfully Connection');
});

module.exports = conn;
