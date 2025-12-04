const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ceti_evaluacion'
});

conexion.connect(err => {
    if (err) {
        console.error('Error en la conexión:', err);
        return;
    }
    console.log('✅ Conectado a MySQL - bd_ceti_evaluacion');
});

// ALUMNO
app.post('/guardar-datos-alumno', (req, res) => {
    const { usuario, contrasena, Ruta_foto_perfil } = req.body;
    const sql = `INSERT INTO alumno (Usuario, Contraseña, Ruta_foto_perfil) VALUES (?, ?, ?)`;
    conexion.query(sql, [usuario, contrasena, Ruta_foto_perfil], (err) => {
        if (err) return res.status(500).json({ error: 'Error al registrar usuario' });
        res.json({ mensaje: 'Registro correcto' });
    });
});

app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;
    const sql = `SELECT * FROM alumno WHERE Usuario = ? AND Contraseña = ?`;
    conexion.query(sql, [usuario, contrasena], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error servidor' });
        if (result.length === 0) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        res.json({ mensaje: 'Login correcto' });
    });
});

// GET endpoints
app.get('/maestros', (req, res) => {
    const sql = `SELECT m.ID_Maestro, mi.Nombre, mi.Apellido FROM maestro m JOIN maestro_id mi ON m.ID_Maestro = mi.ID_Maestro`;
    conexion.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al obtener maestros' });
        res.json(result);
    });
});

app.get('/materia', (req, res) => {
    const sql = `SELECT ID_Materia, Nombre_Materia FROM materia_id`;
    conexion.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al obtener materias' });
        res.json(result);
    });
});

app.get('/materiamaestro', (req, res) => {
    const sql = `SELECT mm.ID_MateriaMaestro, mm.ID_Materia, mm.ID_Maestro, mi.Nombre_Materia, mid.Nombre, mid.Apellido FROM materiamaestro mm JOIN materia_id mi ON mm.ID_Materia = mi.ID_Materia JOIN maestro_id mid ON mm.ID_Maestro = mid.ID_Maestro`;
    conexion.query(sql, (err, result) => {
        if (err) {
            console.error('❌ Error al obtener materiamaestro:', err.message);
            return res.status(500).json({ error: err.sqlMessage });
        }

        console.log('✅ /materiamaestro - filas devueltas:', result.length);
        // Muestra una muestra de los primeros elementos para depuración
        if (result && result.length > 0) {
            console.log('Ejemplo fila:', result[0]);
        }

        res.json(result);
    });
});

// CALIFICACION MATERIA
app.post('/guardar-calificacion-materia', (req, res) => {
    const { Calificacion, ID_Materia } = req.body;

    if (!Calificacion || !ID_Materia) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    console.log('DEBUG: Guardando calificación materia:', { ID_Materia, Calificacion });

    // Buscar si ya existe una calificación para esta materia
    const buscarSQL = `SELECT ID_Calificacion FROM calificacion_materia WHERE ID_Materia = ?`;
    
    conexion.query(buscarSQL, [ID_Materia], (err, result) => {
        if (err) {
            console.error('❌ Error SQL (buscar):', err.message);
            return res.status(500).json({ error: 'Error en la búsqueda' });
        }

        if (result.length > 0) {
            // Si existe, actualizar
            const ID_Calificacion = result[0].ID_Calificacion;
            const actualizarSQL = `UPDATE calificacion_materia SET Calificacion = ? WHERE ID_Calificacion = ?`;
            
            conexion.query(actualizarSQL, [Calificacion, ID_Calificacion], (err, updateResult) => {
                if (err) {
                    console.error('❌ Error SQL (actualizar):', err.message);
                    return res.status(500).json({ error: 'Error al actualizar' });
                }
                
                res.json({ 
                    mensaje: '✅ Calificación actualizada correctamente',
                    ID_Materia,
                    ID_Calificacion,
                    Calificacion
                });
            });
        } else {
            // Si no existe, devolver error (porque todas las materias deberían tener registro)
            return res.status(404).json({ 
                error: 'Materia no encontrada en calificaciones. Contacta al administrador.' 
            });
        }
    });
});

// CALIFICACION MAESTRO
app.post('/guardar-calificacion-maestro', (req, res) => {
    const { Calificacion, ID_Maestro } = req.body;

    if (!Calificacion || !ID_Maestro) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    console.log('DEBUG: Guardando calificación maestro:', { ID_Maestro, Calificacion });

    // Buscar calificación existente
    const buscarSQL = `SELECT ID_Calificacion FROM calificacion_maestro WHERE ID_Maestro = ?`;
    
    conexion.query(buscarSQL, [ID_Maestro], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error en la búsqueda' });

        if (result.length > 0) {
            // Actualizar
            const actualizarSQL = `UPDATE calificacion_maestro SET Calificacion = ? WHERE ID_Calificacion = ?`;
            conexion.query(actualizarSQL, [Calificacion, result[0].ID_Calificacion], (err) => {
                if (err) return res.status(500).json({ error: 'Error al actualizar' });
                res.json({ mensaje: '✅ Calificación de maestro actualizada' });
            });
        } else {
            return res.status(404).json({ 
                error: 'Maestro no encontrado en calificaciones.' 
            });
        }
    });
});

// En tu server.js (backend), modifica el endpoint así:
app.post('/guardar-calificacion-materiamaestro', (req, res) => {
    console.log('📨 SOLICITUD RECIBIDA en /guardar-calificacion-materiamaestro');
    console.log('📦 Body recibido:', req.body);

    const { Calificacion, ID_Materia, ID_Maestro } = req.body;

    if (Calificacion === undefined || ID_Materia === undefined || ID_Maestro === undefined || Calificacion === null || ID_Materia === null || ID_Maestro === null) {
        console.log('❌ FALTAN DATOS:', { Calificacion, ID_Materia, ID_Maestro });
        return res.status(400).json({ 
            error: 'Faltan datos obligatorios',
            datosRecibidos: req.body 
        });
    }

    // Asegurar tipos numéricos
    const cal = parseInt(Calificacion);
    const idMat = parseInt(ID_Materia);
    const idMtro = parseInt(ID_Maestro);

    console.log('DEBUG: Valores parseados:', { cal, idMat, idMtro });

    // Buscar calificación existente para la combinación materia-maestro
    const buscarSQL = `SELECT ID_Calificacion FROM calificacion_materiamaestro WHERE ID_Materia = ? AND ID_Maestro = ?`;
    conexion.query(buscarSQL, [idMat, idMtro], (err, result) => {
        if (err) {
            console.error('❌ Error SQL (buscar):', err.message);
            return res.status(500).json({ error: 'Error en la búsqueda' });
        }

        if (result.length > 0) {
            // Actualizar registro existente
            const ID_Calificacion = result[0].ID_Calificacion;
            const actualizarSQL = `UPDATE calificacion_materiamaestro SET Calificacion = ? WHERE ID_Calificacion = ?`;
            conexion.query(actualizarSQL, [cal, ID_Calificacion], (err2) => {
                if (err2) {
                    console.error('❌ Error SQL (actualizar):', err2.message);
                    return res.status(500).json({ error: 'Error al actualizar' });
                }
                console.log('✅ Calificación materia-maestro actualizada', { ID_Calificacion, idMat, idMtro, Calificacion: cal });
                return res.json({ mensaje: '✅ Calificación materia-maestro actualizada' });
            });
        } else {
            // No existe la combinación
            console.log('⚠️ No existe registro en calificacion_materiamaestro para la combinación solicitada', { idMat, idMtro });
            return res.status(404).json({ error: 'Combinación materia-maestro no encontrada.' });
        }
    });
});

// ✅ INICIAR SERVIDOR
app.listen(3000, () => console.log('✅ Server en puerto 3000'));