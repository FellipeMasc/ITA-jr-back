const express = require("express")
const router = express.Router()

const { login, createUser } = require("../controllers/main")

router.route("/login").post(login)
router.route("/createUser").put(createUser)

module.exports = router
