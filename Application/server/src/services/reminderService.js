const Reminder = require("../models/reminder")
const nodemailer = require('nodemailer')


async function get(id){
    console.log("get")
}

async function getMultiple(){
    console.log("getMultiple")
}

async function create(body) {
    const reminder = new Reminder({
      title: body.title,
      body: body.body,
      interval: body.interval,
      recurring: body.recurring, 
    })

    const inserted = await reminder.save()

    // Remove some fields that the clients do not need to know
    const response = {
      title: inserted.title,
      content: inserted.body,
      startsAt: inserted.startDate,
      repeats: inserted.recurring
    }    

    return {
      message: "Created reminder",
      reminder: response
    }
}

async function update(id, reminder){
    console.log("update")
}

async function remove(id){
    console.log("remove")
}

//This function will be called once a minute by a cron job.
function checkForMessages()
{
  console.log("CheckForMessages");

  var now = Date.now;

  var messages = GetMessagesByDate(now);

  EmailMessages(messages);

  messages.forEach(message =>
  { 
    IncrementReocuringDate(message);
  })
}

//This function will read from the database.
//The date parameter will difine the date that is used in the "where" part of the database request.
function GetMessagesByDate(date)
{
  //read from the database to get the messages that are correct down to the minute. 

  //Reminder.find()

  return [];
}

function EmailMessages(messages)
{
  //send the message for each email.
  messages.forEach(message => {
    var address = message.address;
    var subject = message.subject;
    var body = message.body;

    SendEmail(address, subject, body);
  });
}

//This message will actually send the email.
function SendEmail(address, subject, body)
{
  let mailOptions = {
    from: 'web@mailgun.org',
    to: address,
    subject: subject,
    text: body
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
}

function IncrementReocuringDate(message)
{
  //// testing, move the date ahead by 1 minute
  // message.sendDate = new Date(message.sendDate.getTime() + 60000);
  // UpdateMessageTimeInDatabase(message);
  // return;

  if(message.recurring == none)
  {
    return;
  }

  if(message.recurring == hour)
  {
    message.sendDate.setTime(message.sendDate.getTime() + (60 * 60 * 1000));
  }
  else if(message.recurring == day)
  {
    message.sendDate.setDate(message.sendDate.getDate() + 1);
  }
  else if(message.recurring == week)
  {
    message.sendDate.setDate(message.sendDate.getDate() + 7);
  }
  else if(message.recurring == month)
  {
    message.sendDate = AddMonth(message.sendDate)
  }
  else if(message.recurring == year)
  {
    message.sendDate.setFullYear(message.sendDate.getFullYear() + 1);
  }

  UpdateMessageTimeInDatabase(message);
}

//Add 1 month to a date
function AddMonth(startDate) 
{
  var original = startDate.getDate();

  date.setMonth(startDate.getMonth() + 1);

  if (startDate.getDate() != original) 
  {
    startDate.setDate(0);
  }

  return date;
}

function UpdateMessageTimeInDatabase(message)
{
  //push the message to the database. It should already be in there, but the time has been changed.
}

module.exports = {
  getMultiple,
  get,
  create,
  update,
  remove,
  checkForMessages
}