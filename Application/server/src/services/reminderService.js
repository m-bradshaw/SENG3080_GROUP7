const Reminder = require("../models/reminder")
const nodemailer = require('nodemailer')


async function get(id){
    const retReminder = await Reminder.findOne({_id: id});
    return { reminder: retReminder }
}

async function getMultiple(user){
    const reminders = await Reminder.find({'ownerID': user._id});
    return reminders;
}

async function create(body, user) {
    const reminder = new Reminder({
      title: body.title,
      message: body.body,
      ownerID: user._id,
      email: user.email,
      nextSendDate: body.nextSendDate,
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

async function update(id, body){
  const updated = await Reminder.findByIdAndUpdate(id, body)

  return {
    message: "Updated reminder",
    reminder: updated
  }
}

async function remove(id){
  return await Reminder.deleteOne({_id: id })
}

//This function will be called once a minute by a cron job.
function checkForMessages()
{
  console.log("CheckForMessages");

  var now = new Date();

  //get all the messages for this minute
  GetMessagesByDate(now, true).then((messages, err) => 
  {
    //email all the messages
    //EmailMessages(messages);
    
    //increment the date in all of the objects
    IncrementReocuringDate(messages)

    //update the database with the updated dates.
    //this method is async, but it doesn't really matter in this case
    UpdateMessageTimeInDatabase(messages)
  })
}

//This function will read from the database.
//The date parameter will difine the date that is used in the "where" part of the database request.
async function GetMessagesByDate(date)
{
  date.setSeconds(0,0)

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
    var address = message.email;
    var subject = message.title;
    var body = message.message;

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

function IncrementReocuringDate(messages)
{
  messages.forEach(message => 
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
  })
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

async function UpdateMessageTimeInDatabase(messages)
{
  for(let i = 0; i < messages.length; i++)
  {
    let message = messages[i]

    try {
      
      await Reminder.updateOne(
        { "_id" : message._id },
        { $set: { "nextSendDate" : message.nextSendDate } }
      );
  
    } catch (e) {
      console.log('ERROR!!!!!! ' + e)
    }
  }
}

module.exports = {
  getMultiple,
  get,
  create,
  update,
  remove,
  checkForMessages
}
