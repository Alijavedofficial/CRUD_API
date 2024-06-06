
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required for the product"],
    },
    price: {
      type: Number,
      required: [true, "Price is required for the product"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required for the product"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema)

module.exports = Product;