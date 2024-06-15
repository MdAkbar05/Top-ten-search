const mongoose = require("mongoose");
const MongoURL = process.env.MONGO_URL;
// "mongodb+srv://samratakbar667466:samratDB667466@myfilesdb.m2hhvqt.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async (option = {}) => {
  try {
    await mongoose.connect(MongoURL, option);
    console.log("Mongoose is Connected with ToptenDatabase");

    mongoose.connection.on("error", (error) => {
      console.log("DB Connection error: ", error);
    });
  } catch (error) {
    console.log("Could not Connect to DB : ", error.toString());
  }
};

module.exports = connectDb;
