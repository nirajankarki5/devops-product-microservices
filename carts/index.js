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

app.get("/carts/:id", async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findOne({ _id: id });
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
    await mongoose.connect(connectionString);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};

app.listen(4003, () => {
  console.log("Carts Listening on 4003");
});

start();
