const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  const sql = `
    SELECT 
      m.ID_Maestro,
      mi.Nombre,
      mi.Apellido
    FROM maestro m
    JOIN maestro_id mi 
    ON m.ID_Maestro = mi.ID_Maestro
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
