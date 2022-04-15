const mongoose = require("mongoose")

const reminderSchema = new mongoose.Schema({
    title: { 
        type: String,
        maxlength: [120, "reminder 'title' is too long!"],
        required: [true, "a reminder must have a 'title' field"]
    },
    body: {
        type: String,
        maxlength: [2000, "reminder 'body' is too long!"]
    },
    startDate: {
        type: Date, 
        default: Date.now
    },
    interval: { 
        type: Number,
        required: [true, "a reminder must have an 'interval' field"]
    },
    recurring: {
        type: Boolean,
        default: false
    }    
})

module.exports = mongoose.model("Reminder", reminderSchema)