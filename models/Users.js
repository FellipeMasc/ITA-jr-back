const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "must provide user"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "must provide password"],
    },
})

module.exports = mongoose.model("User", UserSchema)
