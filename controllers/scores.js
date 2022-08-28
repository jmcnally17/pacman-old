const Score = require("../models/score");

const ScoresController = {
  Index: (req, res) => {
    Score.findAll()
      .then((scores) => {
        const sorted = scores.sort((a, b) => b.points - a.points);
        const topTen = sorted.slice(0, 10);
        res.json({
          scores: topTen,
        });
      })
      .catch((err) => res.status(500).send(err));
  },
  Create: (req, res) => {
    Score.create(req.body)
      .then(() => {
        res.status(201).send({ message: "Your score has been saved" });
      })
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = ScoresController;
