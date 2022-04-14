const mongoose = require("mongoose")

const reminderSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    body: String,
    startDate: {
        type: Date, 
        default: Date.now
    },
    interval: { 
        type: Number,
        required: true
    },
    recurring: {
        type: Boolean,
        default: false
    }    
})

module.exports = mongoose.model("Reminder", reminderSchema)