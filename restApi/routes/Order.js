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

router.route("/order_Product/:id").post(orderProduct);
router.route("/updateOrder/:id").put(tokenAdminAuthorization, updateOrder);
router.route("/deleteOrder/:id").delete(tokenAdminAuthorization, deleteOrder);
router.route("/userOrders/:id").get(tokenAuthorization, userOrder);
router.route("/allOrders").get(tokenAdminAuthorization, getAllOrderData);
router.route("/income").get(tokenAdminAuthorization, getIncomestats);



module.exports = router;