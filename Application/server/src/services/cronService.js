var cron = require('node-cron')
const reminderService = require('./reminderService')

// //this will make it that CheckForMessages is called once every minute.
// cron.schedule('*/1 * * * *', () => {
    
//   console.log("Cron Job Running")
//   reminderService.checkForMessages()
// });
reminderService.checkForMessages()