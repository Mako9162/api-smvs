//Conexión a la base de datos

const mysql = require('mysql');
const dot = require('dotenv').config()
const connection = mysql.createConnection({
  
    host: process.env.MYSQLDB_HOST || '192.168.1.189',
    user: process.env.MYSQLDB_USER || 'remo_smvs',
    password: process.env.MYSQLDB_ROOT_PASSWORD || '1Q2w3e4r.',
    database: process.env.MYSQLDB_DATABASE || 'smvs'
});

connection.connect(error =>{
  if (error) throw error;
  console.log('Conexión establecida con Base de Datos!!');
});

module.exports = connection;