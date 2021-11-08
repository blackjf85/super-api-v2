const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const searchNameRouter = require("./search/name/name-router");
const searchIdRouter = require("./search/id/id-router");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use(helmet());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api/search/name", searchNameRouter);
app.use("/api/search/id", searchIdRouter);

app.get("*", (req, res) => {
  res.json({ message: "Welcome to the Hero API" });
});

module.exports = app;
