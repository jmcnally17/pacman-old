const Score = require("../models/score");

const ScoresController = {
  Index: (req, res) => {
    Score.find()
      .populate()
      .exec((err, scores) => {
        if (err) {
          throw err;
        }
        const sorted = scores.sort((a, b) => b.points - a.points);
        const topTen = sorted.slice(0, 10);
        res.json({
          scores: topTen,
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
