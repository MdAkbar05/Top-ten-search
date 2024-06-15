const app = require("./app");
const connectDb = require("./config/DBConnection");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);
  await connectDb();
});
