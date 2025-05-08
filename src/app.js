require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const challengeRoutes = require('./routes/challenges');

const app = express();
app.use(express.json());

app.use('/api/challenges', challengeRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => console.log('Server running'));
  })
  .catch(err => console.error(err));
