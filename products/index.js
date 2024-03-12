const express = require("express");
const mongoose = require("mongoose");
const Product = require("./ProductModel");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectionString = "mongodb://localhost:27017/db-products";

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });
  res.status(200).json(product);
});

app.post("/products", async (req, res) => {
  console.log(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
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

app.listen(4002, () => {
  console.log("Products Listening on 4002");
});

start();
