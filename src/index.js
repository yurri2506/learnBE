const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  return res.send("Hello World");
});

mongoose.connect(
  `mongodb+srv://22520590:${process.env.MONGO_DB}@student.awha5.mongodb.net/`
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
