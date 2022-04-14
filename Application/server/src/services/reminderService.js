const Reminder = require("../models/reminder")

async function get(id){
    console.log("get")
}

async function getMultiple(){
  console.log("getMultiple")
}

async function create(reminder){
    console.log("create")
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