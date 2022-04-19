const router = require("express").Router();
const loginController = require("../controllers/songController");

router.route("/login")
    .get(loginController.loginHandler)
    .post(loginController.validate)
router.route("/")
    .get(loginController.loginHandler);
router.route("/error")
    .get()

module.exports = router;
