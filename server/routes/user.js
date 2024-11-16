const router = require("express").Router();
const userControllers = require("../controllers/user")
const {verifyAccessToken, isAdmin} = require("../middlewares/verifyToken")

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.get("/current", verifyAccessToken ,userControllers.getCurrent);
router.post("/refreshtoken", userControllers.refreshAccessToken);
router.get("/logout", userControllers.logOut);
router.get("/forgotpassword", userControllers.forgotPassword);
router.put("/resetpassword", userControllers.resetPassword);
router.get("/", [verifyAccessToken, isAdmin], userControllers.getUsers);
router.delete("/", [verifyAccessToken, isAdmin], userControllers.deleteUserById);
router.put("/current", [verifyAccessToken], userControllers.updateUserById);
router.put("/address/", [verifyAccessToken], userControllers.updateUserAddress);
router.put("/cart/", [verifyAccessToken], userControllers.updateCartUser)
router.put("/:uid", [verifyAccessToken,isAdmin], userControllers.updateUserByAdmin);

module.exports = router;

// CRUD: create - read - update - delete <=> post - get - put - delete
// create (post) + put - gửi theo body
// read (get) + delete - gửi theo query // ?key=value