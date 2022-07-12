const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://darshan:darshan@cluster0.2hoqjvh.mongodb.net/games-collection?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("mongodb"))
  .catch((err) => console.log(err));
