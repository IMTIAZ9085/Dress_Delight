const express = require('express');
const router = express.Router();

const {
      verifyToken,
      tokenAdminAuthorization,
      tokenAuthorization
} = require('../middleware/verifyToken');

const {
      registerProduct,
      updateProduct,
      deleteProduct,
      getProduct,
      getAllProduct,
} = require('../controller/ProductC.js');

router.route("/registerProduct").post(tokenAdminAuthorization, registerProduct);
router.route("/:id").put(tokenAdminAuthorization, updateProduct);
router.route("/:id").delete(tokenAdminAuthorization, deleteProduct);
router.route("/find/:id").get(getProduct);
router.route("/").get(getAllProduct);


module.exports = router;