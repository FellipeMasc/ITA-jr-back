const express = require("express")
const router = express.Router()

const { login, createUser, dashboard } = require("../controllers/main")
const authMiddleware = require("../middleware/auth")

router.route("/login").post(login)
router.route("/createUser").put(createUser)
router.route("/dashboard").get(authMiddleware, dashboard)

module.exports = router
