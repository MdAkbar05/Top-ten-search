require("dotenv").config();
const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/defaultUsers.jpg";

const serverPort = process.env.PORT || 3001;

module.exports = { defaultImagePath, serverPort };
