const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  name: String,
  points: Number,
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;
