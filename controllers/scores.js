const redis = require("redis");

const client = redis.createClient();
client.connect();

process.on("exit", () => {
  client.quit();
});

const ScoresController = {
  Index: async (req, res) => {
    const scoresData = await client.zRangeWithScores("scores", 0, 9, {
      REV: true,
    });
    res.json({
      scores: scoresData,
    });
  },
  Create: async (req, res) => {
    await client.zAdd("scores", {
      score: req.body.points,
      value: req.body.name,
    });
    res.status(201).send({ message: "your score has been saved" });
  },
};

module.exports = ScoresController;
