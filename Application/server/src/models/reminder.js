const mongoose = require("mongoose")
const Schema = mongoose.Schema;

/*

    const defaultFormData = {
      title: "", 
      message: "", 
      date: "", 
      time: "", 
      recurring: false, 
      daily: false, 
      weekly: false, 
      monthly: false, 
      yearly: false  
    }

*/

const reminderSchema = new mongoose.Schema({
    title: { 
        type: String,
        maxlength: [120, "reminder 'title' is too long!"],
        required: [true, "a reminder must have a 'title' field"]
    },
    message: {
        type: String,
        maxlength: [2000, "reminder 'body' is too long!"]
    },
    ownerID: {type: Schema.Types.ObjectId, ref: 'User'},
    nextSendDate: {
        type: Date, 
        default: Date.now
        // required: true
    },
    recurring: {
        type: Boolean,
        default: false
    },
    daily: {
        type: Boolean,
        default: false
    },
    weekly: {
        type: Boolean,
        default: false
    },
    monthly: {
        type: Boolean,
        default: false
    },
    yearly: {
        type: Boolean,
        default: false
    }        
})

module.exports = mongoose.model("Reminder", reminderSchema)