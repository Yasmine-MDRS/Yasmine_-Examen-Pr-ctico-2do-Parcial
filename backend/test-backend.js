const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ceti_evaluacion'
});

console.log('Intentando conectar a MySQL...');

conexion.connect(err => {
    if (err) {
        console.error('❌ Error de conexión:', err.message);
        process.exit(1);
    }
    
    console.log('✅ Conectado a MySQL');
    
    // Probar una consulta simple
    conexion.query('SELECT COUNT(*) as total FROM alumno', (err, results) => {
        if (err) {
            console.error('❌ Error en consulta:', err.message);
        } else {
            console.log(`✅ Total de alumnos: ${results[0].total}`);
        }
        
        conexion.end();
        process.exit(0);
    });
});