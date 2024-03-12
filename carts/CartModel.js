const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Must provide user id"],
      ref: "User",
    },
    products: {
      type: [
        {
          productId: String,
          name: String,
          price: Number,
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
