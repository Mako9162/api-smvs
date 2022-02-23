//Conexión a la base de datos

const mysql = require('mysql');
const dot = require('dotenv').config()
const connection = mysql.createConnection({
  
    host: process.env.MYSQLDB_HOST || 'localhost',
    user: process.env.MYSQLDB_USER || 'root',
    password: process.env.MYSQLDB_ROOT_PASSWORD || '',
    database: process.env.MYSQLDB_DATABASE || 'smvs'
});

connection.connect(error =>{
  if (error) throw error;
  console.log('Conexión establecida con Base de Datos!!');
});

module.exports = connection;