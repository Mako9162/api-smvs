//Conexión a la base de datos

const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
  
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE 
});

connection.connect(error =>{
  if (error) throw error;
  console.log('Conexión establecida con Base de Datos!!');
});

module.exports = connection;