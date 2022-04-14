const mongoose = require("mongoose")

const reminderSchema = new mongoose.Schema({
    title: String,
    body: String,
    startDate: {type: Date, default: Date.now},
    interval: Number,
    recurring: Boolean,    
})

module.exports = mongoose.model("Reminder", reminderSchema)