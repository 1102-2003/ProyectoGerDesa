const express = require('express');
const app = express();
const port = 3000;

// Importar rutas
const authRoutes = require('./routes/auth');
const challengeRoutes = require('./routes/challenges');

// Middleware para poder leer JSON
app.use(express.json());

// Usar las rutas
app.use('/api', authRoutes);
app.use('/api', challengeRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('Sistema para potenciar competencias en programación 🚀');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
