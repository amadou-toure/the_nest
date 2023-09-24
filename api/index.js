const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const compression = require("compression");
require("dotenv").config();

const app = express();
const announceRoute = require("./route/announce");

app.use(express.json());
app.use(compression());
app.use(cors());

const uri =
  process.env.MONGO_URI ||
  "mongodb+srv://amadouelcapotoure:Z73oICrr7TAzBz5W@cluster0.bgpse7b.mongodb.net/the_nest_db";
const port = process.env.PORT || 5000;

app.use("/api", announceRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

connection.on("error", (err) => {
  console.error("MongoDB Atlas connection error:", err);
});
