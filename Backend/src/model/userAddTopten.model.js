const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
const { defaultImagePath } = require("../secret");
require("dotenv").config();

const userAddTopten = new mongoose.Schema(
  {
    category: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    src: {
      type: String,
      require: false,
    },
    createOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

exports.userAddToptenSchema = mongoose.model("ToptenLists", userAddTopten);
