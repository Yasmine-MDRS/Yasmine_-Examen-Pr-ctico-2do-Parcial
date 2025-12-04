
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('../frontend')); // Servir archivos frontend desde servidor

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

app.post('/guardar-datos-alumno', (req, res) => {
  const { usuario, contrasena, Ruta_foto_perfil } = req.body;

  const sql = `
    INSERT INTO alumno (Usuario, Contraseña, Ruta_foto_perfil)
    VALUES (?, ?, ?)
  `;

  conexion.query(sql, [usuario, contrasena, Ruta_foto_perfil], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error al registrar usuario' });
    }
    res.json({ mensaje: 'Registro correcto' });
  });
});

app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;

  const sql = `
    SELECT * FROM alumno 
    WHERE Usuario = ? AND Contraseña = ?
  `;

  conexion.query(sql, [usuario, contrasena], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error servidor' });

    if (result.length === 0) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }

    res.json({ mensaje: 'Login correcto' });
  });
});


app.get('/maestros', (req, res) => {
    const sql = `
        SELECT 
            m.ID_Maestro,
            mi.Nombre,
            mi.Apellido
        FROM maestro m
        JOIN maestro_id mi 
        ON m.ID_Maestro = mi.ID_Maestro
    `;

    conexion.query(sql, (err, result) => {
        if (err) {
            console.error('Error al obtener maestros:', err);
            return res.status(500).json({ error: 'Error al obtener maestros' });
        }

        res.json(result);
    });
});



app.get('/materia', (req, res) => {
    console.log('✅ Entró a /materia');

    const sql = `SELECT ID_Materia, Nombre_Materia FROM materia_id`;

    conexion.query(sql, (err, result) => {
        
        if (err) {
            console.error('❌ Error SQL:', err);
            return res.status(500).json({ error: 'Error al obtener materias' });
        }

        res.json(result);
    });
});


app.get('/materiamaestro', (req, res) => {
  const sql = `
    SELECT 
      mm.ID_MateriaMaestro,
      mi.Nombre_Materia,
      mid.Nombre,
      mid.Apellido
    FROM materiamaestro mm
    JOIN materia_id mi 
      ON mm.ID_Materia = mi.ID_Materia
    JOIN maestro_id mid 
      ON mm.ID_Maestro = mid.ID_Maestro`;

  conexion.query(sql, (err, result) => {
    if (err) {
      console.error('❌ ERROR SQL:', err.sqlMessage);
      return res.status(500).json({ error: err.sqlMessage });
    }

    res.json(result);
  });
});



app.post('/calificaciones', (req, res) => {
    const { usuario, tipo, id, calificacion } = req.body;

    if (!usuario || !tipo || !id || !calificacion) {
        return res.status(400).json({ error: "Datos incompletos." });
    }

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


app.post('/guardar-formulario-Materia', (req, res) => {
    const { Calificacion, ID_Calificacion } = req.body;

    if (!Calificacion || !ID_Calificacion) {
        return res.status(400).json({ 
            error: 'Faltan datos obligatorios' 
        });
    }

    const sql = `
        UPDATE calificacion_materia 
        SET Calificacion = ? 
        WHERE ID_Calificacion = ?
    `;

    conexion.query(sql, [Calificacion, ID_Calificacion], (err, result) => {
        if (err) {
            console.error('❌ Error SQL:', err.message);
            return res.status(500).json({ 
                error: 'Error al guardar: ' + err.message 
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ 
                error: 'No se encontró esa calificación' 
            });
        }

        res.json({ 
            mensaje: '✅ Calificación actualizada correctamente' 
        });
    });
});

app.post('/guardar-formulario-MateriaMaestro', (req, res) => {
    const { Calificacion, ID_Calificacion, ID_Materia, ID_Maestro } = req.body;
    const sql = 'INSERT INTO calificacion_materiamaestro (Calificacion, ID_Calificacion, ID_Materia, ID_Maestro) VALUES (?, ?, ?, ?)';
    conexion.query(sql, [Calificacion, ID_Calificacion, ID_Materia, ID_Maestro], (err) => {
        if (err) {
            console.error('Error al guardar calificación de materia-maestro:', err);
            return res.status(500).json({ error: 'Error al guardar la calificación de materia-maestro' });
        }
        res.json({ mensaje: 'Calificación de materia-maestro guardada correctamente' });
    });
});


app.post('/guardar-formulario-Maestro', (req, res) => {
    const { Calificacion, ID_Calificacion, ID_Maestro } = req.body;
    const sql = 'INSERT INTO calificacion_maestro (Calificacion, ID_Calificacion, ID_Maestro) VALUES (?, ?, ?)';
    conexion.query(sql, [Calificacion, ID_Calificacion, ID_Maestro], (err) => {
        if (err) {
            console.error('Error al guardar calificación de maestro:', err);
            return res.status(500).json({ error: 'Error al guardar la calificación de maestro' });
        }
        res.json({ mensaje: 'Calificación de maestro guardada correctamente' });
    });
});


// ✅ ARRANQUE DEL SERVIDOR
app.listen(3000, () => console.log('✅ Server en puerto 3000'));
