const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
      const authHeader = req.headers.token;
      try {
            if (authHeader) {
                  const token = authHeader.split(" ")[1];

                  await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
                        if (err) res.status(403).json("Invalid Token!");
                        req.user = user;
                        console.log("req user value is ")
                        console.log(user);
                        next();
                  })
            } else {
                  return res.status(401).json("Unauthorized Access s1");
            }
      } catch (err) {
            console.log(err);
      }
};

exports.tokenAuthorization = (req, res, next) => {
      verifyToken(req, res, () => {
            // console("admin part ");
            console.log("2nd func " + req.user);
            if (req.user.id === req.params.id || req.user.isAdmin) {
                  next();
            } else {
                  res.status(403).json("Unauthorized Access s2");
            }
      });
};

exports.tokenAdminAuthorization = (req, res, next) => {
      verifyToken(req, res, () => {
            if (req.user.isAdmin) {
                  next();
            } else {
                  res.status(403).json("Unauthorized Access");
            }
      });
};