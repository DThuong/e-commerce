const router = require("express").Router();
const userControllers = require("../controllers/user")
const {verifyAccessToken, isAdmin} = require("../middlewares/verifyToken")

router.post("/register", userControllers.register);
router.get("/finalregister/:token", userControllers.finalregister);
router.post("/login", userControllers.login);
router.get("/current", verifyAccessToken ,userControllers.getCurrent);
router.post("/refreshtoken", userControllers.refreshAccessToken);
router.get("/logout", userControllers.logOut);
router.post("/forgotpassword", userControllers.forgotPassword);
router.put("/resetpassword", userControllers.resetPassword);
router.get("/getusers", [verifyAccessToken, isAdmin], userControllers.getUsers);
router.post("/createusers", userControllers.createUsers);
router.delete("/deleteuser/:uid", [verifyAccessToken, isAdmin], userControllers.deleteUserById);
router.put("/current", [verifyAccessToken], userControllers.updateUserById);
router.put("/address/", [verifyAccessToken], userControllers.updateUserAddress);
router.put("/cart/", [verifyAccessToken], userControllers.updateCartUser)
router.put("/updateUserByAdmin/:uid", [verifyAccessToken,isAdmin], userControllers.updateUserByAdmin);

module.exports = router;

// CRUD: create - read - update - delete <=> post - get - put - delete
// create (post) + put - gửi theo body
// read (get) + delete - gửi theo query // ?key=value