const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
      title: {
            type: String,
            require: [true, "Please provide the title"],
            unique: true,
      },
      desc: {
            type: String,
            require: [true, "Please provide the description about the product"],
      },
      img: {
            type: String,
            require: [true, "Please provide the image"]
      },
      categories: {
            type: Array,
      },
      size: {
            type: Array,
      },
      color: {
            type: Array,
      },
      price: {
            type: Number,
            require: [true, "Please provide the price of the product"],
      },
      instock:{
            type:Boolean,
            default: true
      }
}, {
      timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;