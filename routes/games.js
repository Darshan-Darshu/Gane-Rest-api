const express = require("express");

const Game = require("../models/games");

const router = express.Router();

router.post("/game", async (req, res) => {
  try {
    const game = await Game(req.body);

    await game.save();
    res.send(game);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

router.get("/games", async (req, res) => {
  try {
    const games = await Game.find({});

    res.send(games);
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.get("/game", async (req, res) => {
  try {
    const game = await Game.findOne({
      name: req.body.name,
    });

    if (!game) {
      res.status(404).send("Please provide the movie name");
    }

    res.send(game);
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.patch("/game/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const updateFeild = [
    "name",
    "genre",
    "rating",
    "achievements",
  ];
  const isValid = updates.every((update) =>
    updateFeild.includes(update)
  );

  if (!req.params.id) {
    return res.status(400).send("ERROR");
  }

  if (!isValid) {
    return res
      .status(404)
      .send("Please provide the correct info");
  }
  try {
    const game = await Game.findById(req.params.id);

    updates.forEach(
      (update) => (game[update] = req.body[update])
    );

    await game.save();

    res.send(game);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

router.delete("/game/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    await game.remove();

    res.send(game);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = router;
