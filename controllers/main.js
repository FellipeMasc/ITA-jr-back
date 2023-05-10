const User = require("../models/Users")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const login = async (req, res) => {
    try {
        console.log(req.body)
        const { name, password } = req.body
        if (!name || !password) {
            throw new Error("Forneça o usuário e a senha")
        }

        const id = new Date().getDate()
        const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: "7d" })

        console.log(name, password)
        res.status(200).json({ msg: "User created", token })
    } catch (error) {
        res.status(500).json({ msg: "error in login" })
    }
}

const createUser = async (req, res) => {
    try {
    } catch (error) {}
}

module.exports = {
    login,
    createUser,
}
