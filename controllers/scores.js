const Score = require("../models/score");

const ScoresController = {
  Index: (req, res) => {
    Score.find()
      .populate()
      .exec((err, scores) => {
        if (err) {
          throw err;
        }
        res.json({
          scores: scores,
        });
      });
  },
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
