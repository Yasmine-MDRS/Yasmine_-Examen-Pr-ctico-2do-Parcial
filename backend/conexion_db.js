const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'evaluacion_docentes'
    });


conexion.connect(err => {
  if (err) {
    console.error('Error en la conexión:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

module.exports = conexion;