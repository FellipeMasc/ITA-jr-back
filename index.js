require("dotenv").config()
require("express-async-errors")
const connectDB = require("./db/connect")
const cors = require("cors")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const user = require("./routes/main")

const NotFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

//middlewares
/* app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "htttp://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}) */
app.use(
    cors({
        origin: "http://localhost:3000",
    })
)
app.use(bodyParser.json())
app.use(express.static("./public"))
app.use(express.json())

//routes
app.use("/api/v1", user)

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
