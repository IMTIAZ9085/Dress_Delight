const User = require("../model/UserModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//=========REGISTER USER FUNCTION ====================
exports.register = async (req, res) => {
      const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
      };

      try {

            const user = await User.create(newUser);

            if (user) {
                  res.status(201).json({
                        success: true,
                        message: "User Created Successfully"
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

//=========LOGIN USER FUNCTION====================
exports.login = async (req, res) => {
      const {
            email,
            password
      } = req.body;

      //ANOTHER WAY OF ERROR HANDELING
      if (!email || !password) {
            return res.status(401).json({
                  success: false,
                  message: 'Please Fill All The Fields'
            });
      } else {

            try {
                  const user = await User.findOne({
                        email
                  });

                  if (!user) {
                        res.status(401).json({
                              success: false,
                              error: "The user does not exist"
                        });
                  } else {

                        const dcrypted_password = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY);

                        const String_password = dcrypted_password.toString(CryptoJS.enc.Utf8);

                        if (String_password != password) {
                              res.status(404).json({
                                    success: false,
                                    error: "Invalid Credentials"
                              });
                        } else {
                              const Token = jwt.sign({
                                    id: user._id,
                                    isAdmin: user.isAdmin
                              }, process.env.JWT_SECRET_KEY, {
                                    expiresIn: "3d"
                              });

                              const {
                                    password,
                                    ...others
                              } = user._doc;
                              res.status(201).json({
                                    success: true,
                                    data: {
                                          ...others,
                                          Token
                                    }
                              });
                        }

                  }

            } catch (e) {
                  res.status(500).json({
                        success: false,
                        error: e
                  })
            }
      }
};


//=========UPDATE USER FUNCTION====================
exports.updateDetails = async (req, res, next) => {
      if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY)
                  .toString();
      }

      try {
            const UpdateUser = await User.findByIdAndUpdate(req.params.id, {
                  $set: req.body,
            }, {
                  new: true
            });
            res.status(200).json(UpdateUser);
      } catch (e) {
            res.status(403).json(e);
      }
}




// ==========================DELETE USER DETAILS===================================================
exports.deleteUser = async (req, res, next) => {
      try {
            const user = await User.findById(req.params.id);
            if (user) {
                  await user.deleteOne();
                  res.status(200).json("THE USER HAS DELETED SUCCESSFULLY");
            } else {
                  res.status(200).json("THIS USER DOES NOT EXIST");
            }

      } catch (err) {
            res.status(500).json(err);
      }
}

// ==========================get any user details by ADMIN===================================================
exports.getUser = async (req, res, next) => {
      try {
            const user = await User.findById(req.params.id);
            if (user) {
                  const {
                        password,
                        ...others
                  } = user._doc;
                  res.status(201).json({
                        success: true,
                        data: others
                  });
            } else {
                  res.status(500).json("THIS USER DOES NOT EXIST");
            }

      } catch (err) {
            res.status(500).json(err);
      }
}


// ==========================get all user details===================================================
exports.getAllUser = async (req, res, next) => {
      try {
            const query = req.query.new;

            const user = query ? await User.find().limit(5).sort({
                  _id: -1
            }) : await User.find();
            if (user) {
                  res.status(201).json({
                        success: true,
                        data: user
                  });
            } else {
                  res.status(500).json("NO USER CREATED RIGHT NOW");
            }

      } catch (err) {
            res.status(500).json(err);
      }
};

// ==========================get no of user details per month and year===================================================

exports.getUserstats = async (req, res, next) => {
      const date = new Date();
      //this gives us the last year same date as today
      const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
      try {
            //now we are going to use aggregrate function here to get the statistic
            const data = await User.aggregate([{
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
                        },
                  },
                  {
                        $group: {
                              _id: "$month",
                              total: {
                                    $sum: 1
                              },
                        },
                  }
            ]);

            res.status(200).json(data);

      } catch (err) {
            res.status(500).json(err);
      }
}; 