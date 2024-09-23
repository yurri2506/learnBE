const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

routes(app);

mongoose.connect(
  `${process.env.MONGO_DB}`
  )
  .then(() => {
    console.log("Connect database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running in port `, +port);
});
