const express = require('express');
const router = express.Router();

// Simulación de desafíos
const challenges = [
  { id: 1, titulo: "Sumar dos números", lenguaje: ["Python", "JavaScript"], nivel: "Básico" },
  { id: 2, titulo: "Invertir una cadena", lenguaje: ["Python", "Java"], nivel: "Intermedio" }
];

// Obtener todos los desafíos
router.get('/challenges', (req, res) => {
  res.json(challenges);
});

// Obtener un desafío específico por ID
router.get('/challenge/:id', (req, res) => {
  const challenge = challenges.find(c => c.id == req.params.id);
  if (challenge) {
    res.json(challenge);
  } else {
    res.status(404).json({ mensaje: 'Desafío no encontrado' });
  }
});

module.exports = router;
