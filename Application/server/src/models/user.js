const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true
    },
    googleID: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)