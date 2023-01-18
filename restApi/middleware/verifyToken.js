const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
      const authHeader = req.headers.token;
      if (authHeader) {
            const token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
                  if (err) res.status(403).json("Invalid Token!");
                  req.user = user;
                  next();
            })
      } else {
            return res.status(401).json("Unauthorized Access s1");
      }
};

exports.tokenAuthorization = (req, res, next) => {
      verifyToken(req, res, () => {
            if (req.user._id === req.params.id || req.user.isAdmin) {
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