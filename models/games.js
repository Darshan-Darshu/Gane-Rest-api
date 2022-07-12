const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    require: true,
    unique: true,
  },
  genre: {
    type: String,
    trim: true,
    lowercase: true,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    min: 1,
    max: 100,
  },
  achievements: [],
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
