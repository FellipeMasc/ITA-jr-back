const User = require("../models/Users")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const CustomAPIError = require("../errors/custom-error")

const login = async (req, res) => {
    const { name, password } = req.body
    if (!name || !password) {
        throw new CustomAPIError("Forneça o usuário e a senha", 400)
    }

    const id = new Date().getDate()
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.status(200).json({ msg: "User created", token })
}

const createUser = async (req, res) => {
    try {
    } catch (error) {}
}

const dashboard = async (req, res) => {
    res.status(200).json({
        user: req.user.name,
        msg: `Olá, ${req.user.name}, Bem vindo!`,
        jwtsecret: `Sua Autorização JWT é ${Math.floor(Math.random() * 100)}`,
    })
}

module.exports = {
    login,
    createUser,
    dashboard,
}
