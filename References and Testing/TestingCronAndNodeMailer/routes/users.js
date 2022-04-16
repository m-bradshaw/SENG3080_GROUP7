var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool/', function(req, res, next) {
  res.send('You\'re so cool: Lab 3, Duane Cressman,  8431702');
});

var cron = require('node-cron');

cron.schedule('*/5 * * * * *', () => {
  console.log('running a task every 5 seconds');
});

// cron.schedule('*/10 * * * * *', () => {
//   console.log('running a task every 10 seconds');
// });

// cron.schedule('0 22 13 6 2 *', () => {
//   console.log('Set Task Time');
// });


// var task = cron.schedule('*/5 * * * * *', () => {
//   console.log('test destroy');
//   task.stop();
// });

let nodemailer = require('nodemailer');

let mailOptions = {
  from: 'web@mailgun.org',
  to: 'group7seng3080@gmail.com',
  subject: 'Email from Node-App: A Test Message!',
  text: 'Some content to send'
};

let transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'postmaster@sandboxf6b95a84410c45fd995636b8440f228c.mailgun.org',
    pass: 'fbd2bfd9e20deb06877afa8d606d03ba-c250c684-1f45994c',
  }
});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = router;
