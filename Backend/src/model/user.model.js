const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
require("dotenv").config();

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    createOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const enc = process.env.ENC_KEY;
userSchema.plugin(encrypt, {
  secret: enc,
  encryptedFields: ["password "],
});

exports.UsersSchema = mongoose.model("Users", userSchema);
