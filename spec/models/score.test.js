const mongoose = require("mongoose");
require("../mongodb_helper");
const Score = require("../../models/score");

describe(Score, () => {
  beforeEach((done) => {
    mongoose.connection.collections.scores.drop(() => {
      done();
    });
  });

  it("has a name and number of points", () => {
    const score = new Score({
      name: "Joe",
      points: 2000,
    });
    expect(score.name).toBe("Joe");
    expect(score.points).toBe(2000);
  });

  it("can list all scores", (done) => {
    Score.find((err, scores) => {
      expect(err).toBeNull();
      expect(scores).toEqual([]);
      done();
    });
  });

  it("can save a score", (done) => {
    const score = new Score({
      name: "Joe",
      points: 2000,
    });
    score.save((err) => {
      expect(err).toBeNull();

      Score.find((err, scores) => {
        expect(err).toBeNull();
        expect(scores[0]).toMatchObject({
          name: "Joe",
          points: 2000,
        });
        done();
      });
    });
  });
});
