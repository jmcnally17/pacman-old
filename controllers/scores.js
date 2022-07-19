const Score = require("../models/score");

const ScoresController = {
  Create: (req, res) => {
    const score = new Score(req.body);
    score.save((err) => {
      if (err) {
        throw err;
      }
    });
  },
};

module.exports = ScoresController;
