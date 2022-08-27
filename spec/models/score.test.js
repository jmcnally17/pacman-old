const Score = require("../../models/score");
var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres://127.0.0.1/pacman_test");

sequelize
  .sync()
  .then(() => console.log("Database and table have been created/found"));

xdescribe("Score", () => {
  afterAll(() => {
    sequelize.close();
  });

  it("has a name and number of points", () => {
    const score = Score.build({
      name: "Joe",
      points: 2000,
    });
    expect(score.name).toBe("Joe");
    expect(score.points).toBe(2000);
  });

  // xit("has a name and number of points", () => {
  //   const score = new Score({
  //     name: "Joe",
  //     points: 2000,
  //   });
  //   expect(score.name).toBe("Joe");
  //   expect(score.points).toBe(2000);
  // });

  // xit("can list all scores", (done) => {
  //   Score.find((err, scores) => {
  //     expect(err).toBeNull();
  //     expect(scores).toEqual([]);
  //     done();
  //   });
  // });

  // xit("can save a score", (done) => {
  //   const score = new Score({
  //     name: "Joe",
  //     points: 2000,
  //   });
  //   score.save((err) => {
  //     expect(err).toBeNull();

  //     Score.find((err, scores) => {
  //       expect(err).toBeNull();
  //       expect(scores[0]).toMatchObject({
  //         name: "Joe",
  //         points: 2000,
  //       });
  //       done();
  //     });
  //   });
  // });
});
