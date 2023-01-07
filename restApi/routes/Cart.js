const express = require('express');
const router = express.Router();

const {
      verifyToken,
      tokenAdminAuthorization,
      tokenAuthorization
} = require('../middleware/verifyToken');

const {
      cartProduct,
      updateCart,
      deleteCart,
      userCart,
      getAllCartData
} = require('../controller/CartC.js');

router.route("/addToCart").post(tokenAuthorization, cartProduct);
router.route("/:id").put(tokenAuthorization, updateCart);
router.route("/:id").delete(tokenAuthorization, deleteCart);
router.route("/find/:id").get(tokenAuthorization, userCart);
router.route("/all").get(tokenAdminAuthorization, getAllCartData);
// router.route("/owner/:email").get(Finduser);
// router.route("/login").post(login);

module.exports = router;