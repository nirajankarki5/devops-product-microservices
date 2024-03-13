const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    product: {
      name: String,
      price: Number,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
