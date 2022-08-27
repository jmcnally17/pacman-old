const Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres://127.0.0.1/pacman");

const Score = sequelize.define("scores", {
  name: Sequelize.STRING,
  points: Sequelize.INTEGER,
});

sequelize
  .sync()
  .then(() => console.log("Database and table have been created/found"));

module.exports = Score;
