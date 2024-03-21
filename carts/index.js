const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Cart = require("./CartModel");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable all CORS requests
app.use(cors());

const connectionString = "mongodb://localhost:27017/db-carts";

app.get("/carts", async (req, res) => {
  const carts = await Cart.find({});
  res.status(200).json(carts);
});

app.get("/carts/:userId", async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.find({ userId: userId });
  res.status(200).json(cart);
});

app.post("/carts", async (req, res) => {
  console.log(req.body);
  try {
    const cart = await Cart.create(req.body);
    res.status(201).json({ cart });
  } catch (error) {
    console.log(error);
  }
});

const start = async () => {
  try {
    mongoose
      .connect("mongodb://mongodb:27017/db-carts", {
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
app.listen(4003, () => {
  console.log("Carts Listening on 4003");
});

start();
