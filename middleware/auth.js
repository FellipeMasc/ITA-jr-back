const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomAPIError("Token não enviado", 400)
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const { id, name } = decoded
        req.user = { id, name }
        next()
    } catch (error) {
        throw new CustomAPIError("Rota não autorizada")
    }
}

module.exports = authenticationMiddleware
