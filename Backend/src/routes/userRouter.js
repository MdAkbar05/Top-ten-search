const express = require("express");
const {
  getAllUser,
  userSignUp,
  userLogin,
  userAddTopten,
  getAllTopten,
  getTechnologys,
} = require("../controllers/user.controller");

const userRouter = express.Router();
///users/...
userRouter.get("/", getAllUser);
userRouter.post("/signup", userSignUp);
userRouter.post("/login", userLogin);
userRouter.post("/addTopten", userAddTopten);
userRouter.get("/getAItopten", getAllTopten);
userRouter.get("/getTechnologys", getTechnologys);

module.exports = { userRouter };
