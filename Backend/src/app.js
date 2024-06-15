require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const { userRouter } = require("./routes/userRouter");
const createHttpError = require("http-errors");
const { errorResponse } = require("./controllers/response.controller");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Used own Router
app.use("/users", userRouter);

// default router
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to server" });
});

//Client Error handling
app.use((req, res, next) => {
  next(createHttpError(404, "Routes not found"));
});

//Server Error handling
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
