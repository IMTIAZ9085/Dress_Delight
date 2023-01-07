const express = require('express');
const router = express.Router();

const {
      updateDetails,
      deleteUser,
      getUser,
      getAllUser,
      getUserstats
} = require('../controller/UserC');

const {
      verifyToken,
      tokenAdminAuthorization,
      tokenAuthorization
} = require('../middleware/verifyToken');


router.route("/:id").put(tokenAuthorization, updateDetails);
router.route("/:id").delete(tokenAuthorization, deleteUser);
router.route("/find/:id").get(tokenAdminAuthorization, getUser);
router.route("/").get(tokenAdminAuthorization, getAllUser);
router.route("/user_stats").get(tokenAdminAuthorization, getUserstats);

// router.route("/register").post(register);
// router.route("/owner/:email").get(Finduser);
// router.route("/login").post(login);
// router.route("/forgetPassword").post(forgetPassword);
// router.route("/resetPassword/:resetToken").put(resetPassword);
// router.route("/users").get(Allusers);

module.exports = router;