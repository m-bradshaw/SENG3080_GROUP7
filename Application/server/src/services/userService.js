const bcrypt = require('bcryptjs');
const User = require("../models/user");

async function login() {
  console.log("login")
}

async function register(body) {
  // Find if the user exists
  User.findOne({email: body.email}).then(user => {
    if(user) {
       return {
         message: "Email is invalid or already taken",
         user: null
       }
    }
  });
}

module.exports = {
  login,
  register
}