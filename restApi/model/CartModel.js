const mongoose = require('mongoose');

const CartScehma = new mongoose.Schema({
      userId: {
            type: String,
            require: [true, "Please provide the userId"]
      },
      products:[
            {
                  productId:{type: String},
                  quantity:{type: Number,default: 1},
            },
      ],
}, {
      timestamps: true
});

const Cart = mongoose.model("Cart", CartScehma);

module.exports = Cart;