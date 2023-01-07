const express = require('express');
const router = express.Router();

const {
      verifyToken,
      tokenAdminAuthorization,
      tokenAuthorization
} = require('../middleware/verifyToken');


const {
      orderProduct,
      updateOrder,
      deleteOrder,
      userOrder,
      getAllOrderData,
      getIncomestats
} = require('../controller/OrderC');

router.route("/order_Product/:id").post(tokenAuthorization, orderProduct);
router.route("/updateOrder/:id").put(tokenAdminAuthorization, updateOrder);
router.route("/deleteOrder/:id").delete(tokenAdminAuthorization, deleteOrder);
router.route("/userOrders/:id").get(tokenAuthorization, userOrder);
router.route("/allOrders").get(tokenAdminAuthorization, getAllOrderData);
// router.route("/Order_stats").get(tokenAdminAuthorization, getOrderstats);
router.route("/income").get(tokenAdminAuthorization, getIncomestats);

// router.route("/owner/:email").get(Finduser);
// router.route("/login").post(login);
// router.route("/forgetPassword").post(forgetPassword);
// router.route("/resetPassword/:resetToken").put(resetPassword);
// router.route("/users").get(Allusers);

module.exports = router;