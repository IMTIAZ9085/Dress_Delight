const Product = require("../model/ProductModel.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//=========REGISTER PRODUCT FUNCTION ====================
exports.registerProduct = async (req, res) => {
      const newProduct = new Product(req.body);

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
exports.updateProduct = async (req, res, next) => {
      try {
            const UpdateProduct = await Product.findByIdAndUpdate(req.params.id, {
                  $set: req.body,
            }, {
                  new: true
            });
            if (UpdateProduct) {
                  res.status(201).json({
                        success: true,
                        data: UpdateProduct
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
exports.deleteProduct = async (req, res, next) => {
      try {
            const pp = await Product.findById(req.params.id);
            if (pp) {
                  await pp.deleteOne();
                  res.status(200).json("THE PRODUCT HAS DELETED SUCCESSFULLY");
            } else {
                  res.status(200).json("THIS PRODUCT DOES NOT EXIST");
            }
      } catch (err) {
            res.status(500).json(err);
      } 
}

// ==========================get any product details by ADMIN===================================================
exports.getProduct = async (req, res, next) => {
      try {
            const product = await Product.findById(req.params.id);
            if (product) {
                  res.status(201).json({
                        success: true,
                        data: product
                  });
            } else {
                  res.status(500).json("THIS PRODUCT DOES NOT EXIST");
            }

      } catch (err) {
            res.status(500).json(err);
      }
}


// ==========================get all product details===================================================
exports.getAllProduct = async (req, res, next) => {
      const qNew = req.query.new;
      const qCategory = req.query.category;

      try {
            let products;

            if (qNew) {
                  products = await Product.find().sort({
                        createdAt: -1
                  }).limit(1);
            } else if (qCategory) {
                  products = await Product.find({
                        categories: {
                              $in: [qCategory]
                        }
                  })
            } else {
                  products = await Product.find();
            }
            if (products) {
                  res.status(201).json({
                        success: true,
                        data: products
                  });
            } else {
                  res.status(500).json("NO PRODUCT CREATED RIGHT NOW");
            }

      } catch (err) {
            res.status(500).json(err);
      }
};