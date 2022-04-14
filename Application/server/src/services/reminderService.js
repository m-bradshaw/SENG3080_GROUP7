const Reminder = require("../models/reminder")

async function get(id){
    console.log("get")
}

async function getMultiple(){
  console.log("getMultiple")
}

async function create(body){
    const reminder = new Reminder({
      title: body.title,
      body: body.body,
      interval: body.interval,
      recurring: body.recurring, 
    })
    await reminder.save()
    console.log("Saved: " + reminder)
}

async function update(id, reminder){
    console.log("update")
}

async function remove(id){
    console.log("remove")
}

module.exports = {
  getMultiple,
  get,
  create,
  update,
  remove
}