const mongoose = require('mongoose');

const ProgrammingChallengeSchema = new mongoose.Schema({
  language: { type: String, required: true },
  level: { type: String, required: true },
  description: { type: String, required: true, maxlength: 1000 },
  solution: { type: String, required: true, maxlength: 1000 }
});

ProgrammingChallengeSchema.methods.checkSolution = function (userCode) {
  const clean = (str) => str.trim().replace(/\s+/g, '');
  return clean(userCode) === clean(this.solution);
};

module.exports = mongoose.model('ProgrammingChallenge', ProgrammingChallengeSchema);
