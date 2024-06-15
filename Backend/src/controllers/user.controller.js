const { json } = require("body-parser");
const { UsersSchema } = require("../model/user.model");
const { userAddToptenSchema } = require("../model/userAddTopten.model");
const { successResponse } = require("./response.controller");

const getAllUser = async (req, res) => {
  const users = await UsersSchema({});

  const userMap = {};
  users.forEach((user) => {
    userMap[user._id] = user;
  });

  res.send(userMap);
};

const userSignUp = async (req, res) => {
  try {
    const newUser = new UsersSchema({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const users = await UsersSchema.findOne({ email });
    if (users && users.password === password) {
      res.status(201).json({ users, isLoggin: true });
    } else {
      res.status(501).json({ isLoggin: false });
    }
  } catch (error) {
    console.log(error);
  }
};

const userAddTopten = async (req, res) => {
  try {
    const category = req.body.category;
    const title = req.body.title;
    const description = req.body.description;
    const imageSrc = req.body.imageSrc;
    const src = req.body.src;
    const ToptenItem = new userAddToptenSchema({
      category: category,
      title: title,
      description: description,
      img: imageSrc,
      src: src,
    });
    const addedTopten = await ToptenItem.save();
    return successResponse(res, {
      statusCode: 200,
      message: "Successfully added Topten list",
      payload: { addedTopten },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllTopten = async (req, res) => {
  try {
    const options = { category: "AI" };
    const ToptenItems = await userAddToptenSchema.find(options);
    successResponse(res, {
      message: "Get All Topten AI Successfulyy",
      payload: ToptenItems,
    });
  } catch (error) {
    console.log(error);
  }
};

const getTechnologys = async (req, res) => {
  try {
    const options = { category: "Technology" };
    const ToptenItems = await userAddToptenSchema.find(options);
    successResponse(res, {
      message: "Get All Topten Technology Successfulyy",
      payload: ToptenItems,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
  userSignUp,
  userLogin,
  userAddTopten,
  getAllTopten,
  getTechnologys,
};
