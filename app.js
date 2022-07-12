const express = require("express");

require("./db/mongoose");
const gameRouter = require("./routes/games");

const app = express();
app.use(express.json());

app.use(gameRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
