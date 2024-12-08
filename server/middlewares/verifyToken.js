const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// hàm này verify access token mà người dùng gửi lên
const verifyAccessToken = asyncHandler(async (req, res, next) => {
  // Check if the authorization header starts with "Bearer "
  if (req?.headers?.authorization?.startsWith("Bearer ")) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, msg: "Invalid access token" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ success: false, msg: "Require authenticated token" });
  }
});

// middleware phân quyền admin
const isAdmin = asyncHandler((req, res, next) => {
  const { role } = req.user;
  if (+role !== 2002) {
    return res.status(401).json({
      success: false,
      msg: "Require admin role",
    });
  }
  next();
});

module.exports = {
  verifyAccessToken,
  isAdmin,
};
