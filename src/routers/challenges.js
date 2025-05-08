const express = require('express');
const router = express.Router();
const ProgrammingChallenge = require('../models/ProgrammingChallenge');

router.get('/', async (req, res) => {
  const { language, level } = req.query;
  const challenges = await ProgrammingChallenge.find({ language, level });
  res.json(challenges);
});

router.post('/check/:id', async (req, res) => {
  const { id } = req.params;
  const { userCode } = req.body;

  const challenge = await ProgrammingChallenge.findById(id);
  if (!challenge) return res.status(404).send('Challenge not found');

  const result = challenge.checkSolution(userCode);
  res.json({ correct: result });
});

module.exports = router;
