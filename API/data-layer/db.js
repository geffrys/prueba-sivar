import mysql from 'mysql2';
import configs from '../env.js';

const connection = mysql.createConnection({
  host: configs.HOST,
  user: configs.USER,     
  password: configs.PASSWORD, 
  database: configs.DATABASE 
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado como id ' + connection.threadId);
});

export default connection;