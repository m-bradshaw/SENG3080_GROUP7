const userService = require('../services/userService');

async function login(req, res, next) {
    try {
        res.json(await userService.login(req.query.page));
    } catch (err) {
        next(err);
    }
}

async function register(req, res, next) {
    try {
        const {email, password, passwordRepeat} = req.body
        if(password !== passwordRepeat) {
            throw new Error("Passwords do not match")
        }

        if(!email) {
            throw new Error("Cannot create user without email")
        }

        res.json(await userService.register(req.body));
    } catch (err) {
        next(err);
    }
}

module.exports = {
  login,
  register
};