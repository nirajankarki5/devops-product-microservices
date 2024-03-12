const express = require("express");
const mongoose = require("mongoose");
const User = require("./UserModel");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectionString = "mongodb://localhost:27017/db-users";

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.status(200).json(user);
});

app.post("/users", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
});

const start = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};

app.listen(4001, () => {
  console.log("Users Listening on 4001");
});

start();
