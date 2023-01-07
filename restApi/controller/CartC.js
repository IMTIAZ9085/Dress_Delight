const Cart = require("../model/CartModel.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//=========ADD PRODUCT IN THE CART ====================
exports.cartProduct = async (req, res) => {
      const newProduct = new Cart(req.body);

      try {

            const productDetails = await newProduct.save();

            if (productDetails) {
                  res.status(201).json({
                        success: true,
                        data: productDetails
                  });
            } else {
                  res.status(401).json({
                        success: false,
                        message: "Error Entry of Data"
                  });
            }

      } catch (err) {
            res.status(401).json(err);
      }
};



//=========UPDATE USER FUNCTION====================
exports.updateCart = async (req, res, next) => {
      try {
            const UpdateCart = await Cart.findByIdAndUpdate(req.params.id, {
                  $set: req.body,
            }, {
                  new: true
            });
            if (UpdateCart) {
                  res.status(201).json({
                        success: true,
                        data: UpdateCart
                  });
            } else {
                  res.status(401).json({
                        success: false,
                        message: "Error Update of Data"
                  });
            }
      } catch (e) {
            res.status(403).json(e);
      }
}



// ==========================DELETE PRODUCT DETAILS===================================================
exports.deleteCart = async (req, res, next) => {
      try {
            const pp = await Cart.findById(req.params.id);
            if (pp) {
                  await pp.deleteOne();
                  res.status(200).json("THE PRODUCT HAS REMOVE FROM THE CART");
            } else {
                  res.status(200).json("THIS PRODUCT DOES NOT EXIST");
            }

      } catch (err) {
            res.status(500).json(err);
      }
}

// ==========================get user cart details by ADMIN===================================================
exports.userCart = async (req, res, next) => {
      try {
            const userCt = await Cart.findOne({
                  userId: req.params.id
            });
            if (userCt) {
                  res.status(201).json({
                        success: true,
                        data: userCt
                  });
            } else {
                  res.status(500).json("THE CART IS EMPTY");
            }

      } catch (err) {
            res.status(500).json(err);
      }
}


// ==========================get all cart details by admin===================================================
exports.getAllCartData = async (req, res, next) => {

      try {
            const carts = await Cart.find();
            if (carts) {
                  res.status(200).json({
                        success: true,
                        data: carts
                  });
            } else {
                  res.status(500).json("NO PRODUCT CREATED RIGHT NOW");
            }

      } catch (err) {
            res.status(500).json(err);
      }
};