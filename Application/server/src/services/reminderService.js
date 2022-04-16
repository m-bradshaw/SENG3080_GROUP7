const Reminder = require("../models/reminder")
const nodemailer = require('nodemailer')
const res = require("express/lib/response")


async function get(id){
    console.log("get")
}

async function getMultiple(){
    console.log("getMultiple")
    GetMessagesByDate(new Date())
}

async function create(body) {
    const reminder = new Reminder({
      title: body.title,
      message: body.body,
      nextSendDate: new Date(new Date() + 1 * 60 * 1000), // Change in the frontend to concat (date + time)
      recurring: body.recurring,
      daily: body.daily,
      weekly: body.weekly,
      monthly: body.monthly,
      yearly: body.yearly
    })

    const inserted = await reminder.save()
    return {
      message: "Created reminder",
      reminder: inserted
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

  var now = new Date();

  var messages = GetMessagesByDate(now).then((messages, err) => 
  {
    //console.log(messages);
    
    //EmailMessages(messages);
    
    messages.forEach(message =>
    {
      IncrementReocuringDate(message);
    })
  })
}

//This function will read from the database.
//The date parameter will difine the date that is used in the "where" part of the database request.
async function GetMessagesByDate(date)
{
  date.setSeconds(0,0)

  // let test = new Reminder({
  //   title:'test',
  //   message: 'the message body',
  //   nextSendDate: new Date(date.getTime())
  // })

  // test.save();

  // let test2 = new Reminder({
  //   title:'test2',
  //   message: 'the message body',
  //   nextSendDate: new Date(date.getTime() + 60 * 1000)
  // })

  // test2.save();

  //read from the database to get the messages that are correct down to the minute. 
  const result = await Reminder.find({nextSendDate: {
    $gte: date, 
    $lt: new Date(date.getTime() + 60 * 1000)
  }});

  return result.map((r) => r.toObject());
}

function EmailMessages(messages)
{
  //send the message for each email.
  messages.forEach(message => {
    var address = "group7seng3080@gmail.com";  //TODO: Use users actual email
    var subject = message.title;
    var body = message.message;

    //console.log("Sending email to message: " + message.title)

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
  
  console.log("About to send email...")

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

  if(!message.recurring)
  {
    console.log(message.title + " did not need to incrment");
    return;
  }

  console.log(message)

  if(message.daily)
  {
    message.nextSendDate.setDate(message.nextSendDate.getDate() + 1);
  }
  else if(message.weekly)
  {
    message.nextSendDate.setDate(message.nextSendDate.getDate() + 7);
  }
  else if(message.monthly)
  {
    message.nextSendDate = AddMonth(message.nextSendDate)
  }
  else if(message.yearly)
  {
    message.nextSendDate.setFullYear(message.nextSendDate.getFullYear() + 1);
  }

  console.log(message)

  //UpdateMessageTimeInDatabase(message);
}

//Add 1 month to a date
function AddMonth(startDate) 
{
  var original = startDate.getDate();

  startDate.setMonth(startDate.getMonth() + 1);

  if (startDate.getDate() != original) 
  {
    startDate.setDate(0);
  }

  return startDate;
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
