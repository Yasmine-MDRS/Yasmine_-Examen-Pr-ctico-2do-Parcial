const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());

// CONEXIÓN MYSQL (debe ir antes de las rutas)
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bd_ceti_evaluacion'  // Nombre correcto
});

conexion.connect(err => {
    if (err) {
        console.error('Error en la conexión:', err);
        return;
    }
    console.log('Conectado a MySQL - bd_ceti_evaluacion');
});

// RUTAS
app.post('/calificaciones', (req, res) => {
    const { usuario, tipo, id, calificacion } = req.body;

    if (!usuario || !tipo || !id || !calificacion) {
        return res.status(400).json({ error: "Datos incompletos." });
    }

    // Validación del tipo
    if (!["maestro", "materia", "materiamaestro"].includes(tipo)) {
        return res.status(400).json({ error: "Tipo inválido." });
    }

    let tabla = "";
    let columna = "";

    if (tipo === "maestro") {
        tabla = "calificacion_maestro";
        columna = "ID_Maestro";
    } else if (tipo === "materia") {
        tabla = "calificacion_materia";
        columna = "ID_Materia";
    } else if (tipo === "materiamaestro") {
        tabla = "calificacion_materiamaestro";
        columna = "ID_MateriaMaestro";
    }

    const sql = `UPDATE ${tabla} SET Calificacion = ? WHERE ${columna} = ?`;
    
    conexion.query(sql, [calificacion, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al guardar calificación." });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "No existe registro con ese ID." });
        }

        res.json({
            mensaje: "Calificación registrada correctamente.",
            tipo,
            id,
            calificacion
        });
    });
});

app.post('/guardar-datos-alumno', (req, res) => {
    const { usuario, contrasena, Ruta_foto_perfil } = req.body;
    
    console.log('Guardando alumno:', { usuario, contrasena, Ruta_foto_perfil });
    
    // CORRECCIÓN: Tabla 'alumno' (singular, como en tu SQL)
    const sql = 'INSERT INTO alumno (Usuario, Contraseña, Ruta_foto_perfil) VALUES (?, ?, ?)';
    
    conexion.query(sql, [usuario, contrasena, Ruta_foto_perfil || ''], (err, result) => {
        if (err) {
            console.error('Error al guardar alumno:', err);
            return res.status(500).json({ error: 'Error al guardar los datos del alumno' });
        }
        res.json({ 
            mensaje: 'Datos del alumno guardados correctamente', 
            id: result.insertId 
        });
    });
});

app.post('/guardar-formulario-Materia', (req, res) => {
    const { Calificacion, ID_Calificacion, ID_Materia } = req.body;
    const sql = 'INSERT INTO calificacion_materia (Calificacion, ID_Materia) VALUES (?, ?, ?)';
    conexion.query(sql, [Calificacion, ID_Calificacion, ID_Materia], (err, result) => {
        if (err) {
            console.error('Error al guardar calificación de materia:', err);
            return res.status(500).json({ error: 'Error al guardar la calificación de materia' });
        }
        res.json({
            mensaje: 'Calificación de materia guardada correctamente',
            id: result.insertId
        });
    });
});
app.post('/guardar-formulario-MateriaMaestro', (req, res) => {
    const { Calificacion, ID_Calificacion, ID_Materia, ID_Maestro } = req.body;
    const sql = 'INSERT INTO calificacion_materiamaestro (Calificacion, ID_Calificacion, ID_Materia, ID_Maestro) VALUES (?, ?, ?, ?)';
    conexion.query(sql, [Calificacion, ID_Calificacion, ID_Materia, ID_Maestro], (err, result) => {
        if (err) {
            console.error('Error al guardar calificación de materia-maestro:', err);
            return res.status(500).json({ error: 'Error al guardar la calificación de materia-maestro' });
        }
        res.json({
            mensaje: 'Calificación de materia-maestro guardada correctamente',
            id: result.insertId
        });
    });
});

app.post('/guardar-formulario-Maestro', (req, res) => {
    const { Calificacion, ID_Calificacion, ID_Maestro } = req.body;
    const sql = 'INSERT INTO calificacion_maestro (Calificacion, ID_Calificacion, ID_Maestro) VALUES (?, ?, ?)';
    conexion.query(sql, [Calificacion, ID_Calificacion, ID_Maestro], (err, result) => {
        if (err) {
            console.error('Error al guardar calificación de maestro:', err);
            return res.status(500).json({ error: 'Error al guardar la calificación de maestro' });
        }
        res.json({
            mensaje: 'Calificación de maestro guardada correctamente',
            id: result.insertId
        });
    });
});

app.post('/guardar-formulario-MateriaMaestro', (req, res) => {
    const { Calificacion, ID_Calificacion, ID_Materia, ID_Maestro } = req.body;
    const sql = 'INSERT INTO calificacion_materiamaestro (Calificacion, ID_Calificacion, ID_Materia, ID_Maestro) VALUES (?, ?, ?, ?)';
    conexion.query(sql, [Calificacion, ID_Calificacion, ID_Materia, ID_Maestro], (err, result) => {
        if (err) {
            console.error('Error al guardar calificación de materia-maestro:', err);
            return res.status(500).json({ error: 'Error al guardar la calificación de materia-maestro' });
        }
        res.json({
            mensaje: 'Calificación de materia-maestro guardada correctamente',
            id: result.insertId
        });
    });
});

app.listen(3000, () => console.log('Server en puerto 3000'));