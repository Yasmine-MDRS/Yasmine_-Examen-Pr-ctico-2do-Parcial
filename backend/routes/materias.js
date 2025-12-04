const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  const sql = `
    SELECT 
    m.ID_Materia,
    mi.Nombre_Materia
    FROM materia m
    JOIN materia_id mi 
    ON m.ID_Materia = mi.ID_Materia;

  `;

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result); // 👈 Se envía al frontend
    }
  });
});

module.exports = router;
