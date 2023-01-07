const Order = require("../model/OrderModel.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//=========ADD ORDER ====================
exports.orderProduct = async (req, res) => {
      const newProduct = new Order(req.body);

      try {

            const orderDetails = await newProduct.save();

            if (orderDetails) {
                  res.status(201).json({
                        success: true,
                        data: orderDetails
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



//=========UPDATE order FUNCTION====================
exports.updateOrder = async (req, res, next) => {
      try {
            const UpdateOrder = await Order.findByIdAndUpdate(req.params.id, {
                  $set: req.body,
            }, {
                  new: true
            });
            if (UpdateOrder) {
                  res.status(201).json({
                        success: true,
                        data: UpdateOrder
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



// ==========================DELETE ORDER DETAILS===================================================
exports.deleteOrder = async (req, res, next) => {
      try {
            const pp = await Order.findById(req.params.id);
            if (pp) {
                  await pp.deleteOne();
                  res.status(200).json("THE ORDER HAS BEEN DONE");
            } else {
                  res.status(200).json("THIS ORDER DOES NOT EXIST");
            }

      } catch (err) {
            res.status(500).json(err);
      }
}

// ==========================get user order details ===================================================
exports.userOrder = async (req, res, next) => {
      try {
            const userOd = await Order.find({
                  userId: req.params.id
            });
            if (userOd) {
                  res.status(201).json({
                        success: true,
                        data: userOd
                  });
            } else {
                  res.status(500).json("THE ORDER IS EMPTY FOR THIS USER");
            }

      } catch (err) {
            res.status(500).json(err);
      }
}


// ==========================get all cart details by admin===================================================
exports.getAllOrderData = async (req, res, next) => {

      try {
            const orders = await Order.find();
            if (orders) {
                  res.status(200).json({
                        success: true,
                        data: orders
                  });
            } else {
                  res.status(500).json("NO ORDER CREATED RIGHT NOW");
            }

      } catch (err) {
            res.status(500).json(err);
      }
};


//==========================get no of order details per month and year===================================================

// exports.getOrderstats = async (req, res, next) => {
//       const date = new Date();
//       //this gives us the last year same date as today
//       const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//       try {
//             //now we are going to use aggregrate function here to get the statistic
//             const data = await Order.aggregate([{
//                         $match: {
//                               createdAt: {
//                                     $gte: lastYear
//                               }
//                         }
//                   },
//                   {
//                         $project: {
//                               month: {
//                                     $month: "$createdAt"
//                               },
//                         },
//                   },
//                   {
//                         $group: {
//                               _id: "$month",
//                               total: {
//                                     $sum: 1
//                               },
//                         },
//                   }
//             ]);

//             res.status(200).json(data);

//       } catch (err) {
//             res.status(500).json(err);
//       }
// };


//===================GET REVENUE DETAILS PER MONTH ==============================================
exports.getIncomestats = async (req, res, next) => {
      const date = new Date();
      //this gives us the last year same date as today
      const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
      try {
            //now we are going to use aggregrate function here to get the statistic
            const data = await Order.aggregate([{
                        $match: {
                              createdAt: {
                                    $gte: lastYear
                              }
                        }
                  },
                  { 
                        $project: {
                              month: {
                                    $month: "$createdAt"
                              },
                              sales: "$amount"
                        },
                  },
                  {
                        $group: {
                              _id: "$month",
                              total: {
                                    $sum: "$sales"
                              },
                        },
                  }
            ]);

            res.status(200).json(data);

      } catch (err) {
            res.status(500).json(err);
      }
};