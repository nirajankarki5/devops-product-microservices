const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./UserModel");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable all CORS requests
app.use(cors());

const connectionString = "mongodb://localhost:27017/db-users";

app.get("/users", async (req, res) => {
  console.log({ req });
  const users = await User.find({});
  console.log({ users });

  res.status(200).json(users);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.status(200).json(user);
});

app.post("/users/login", async (req, res) => {
  const user = await User.find({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ msg: "NO user Found" });
  }
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
    mongoose
      .connect("mongodb://mongodb:27017/db-users", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });
  } catch (error) {
    console.log(error);
  }
};

app.listen(4001, () => {
  console.log("Users Listening on 4001");
});

start();
