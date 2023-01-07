const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
      userId: {
            type: String,
            require: [true, "Please provide the userId"]
      },
      products: [{
            productId: {
                  type: String
            },
            quantity: {
                  type: Number,
                  default: 1
            },
      }, ],
      amount: {
            type: Number,
            required: true
      },
      address: {
            type: Object,
            required: true
      },
      status: {
            type: String,
            default: "On Way"
      },
}, {
      timestamps: true
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;