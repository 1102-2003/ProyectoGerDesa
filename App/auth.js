const express = require('express');
const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Aquí deberías guardar el usuario en la base de datos (futuro)
  res.json({ mensaje: `Usuario ${username} registrado exitosamente.` });
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Aquí deberías validar el usuario (futuro)
  res.json({ mensaje: `Usuario ${username} inició sesión.` });
});

module.exports = router;
