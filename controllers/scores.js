const redis = require("redis");

let client;
if (process.env.REDIS_HOST) {
  client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  });
} else {
  client = redis.createClient();
}
client.connect();

process.on("exit", () => {
  client.quit();
});

const ScoresController = {
  Index: async (req, res) => {
    try {
      const scoresData = await client.zRangeWithScores("scores", 0, 9, {
        REV: true,
      });
      res.json({
        scores: scoresData,
      });
    } catch {
      res.status(500).send({ message: "scores could not be retrieved" });
    }
  },
  Create: async (req, res) => {
    try {
      const currentScore = await client.zScore("scores", req.body.name);
      if (req.body.points > currentScore || currentScore === null) {
        await client.zAdd("scores", {
          score: req.body.points,
          value: req.body.name,
        });
        res.status(201).send({ message: "your score has been saved" });
      } else {
        res
          .status(201)
          .send({ message: "you have not beaten your high score" });
      }
    } catch {
      res.status(500).send({ message: "your score was not saved" });
    }
  },
};

module.exports = ScoresController;
