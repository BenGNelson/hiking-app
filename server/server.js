const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");

const hikes = require("./routes/hikes");
const users = require("./routes/users");

dotenv.config({
  path: "./config/config.env",
});

const PORT = process.env.PORT || 5000;
const mongoUrl = `mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_PASSWORD}@cluster0.4ubdd.mongodb.net/hiking-db?retryWrites=true&w=majority`;
const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/hikes", hikes);
app.use("/api/v1/users", users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(
      PORT,
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    );
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
