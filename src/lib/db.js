//Conexión a la base de datos

const mysql = require('mysql');
const dot = require('dotenv').config()
const connection = mysql.createConnection({
  
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_ROOT_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'smvs'
});

connection.connect(error =>{
  if (error) throw error;
  console.log('Conexión establecida con Base de Datos!!');
});

module.exports = connection;