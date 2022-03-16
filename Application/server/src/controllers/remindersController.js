const reminderService = require('../services/reminderService');

async function get(req, res, next) {
    try {
        res.json(await reminderService.get(req.query.page));
    } catch (err) {
        console.error(`Failed to retrieve reminder`, err.message);
        next(err);
    }
}

async function getMultiple(req, res, next) {
    try {
        res.json(await reminderService.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Failed to retrieve multiple reminders`, err.message);
        next(err);
    }
}
  
async function create(req, res, next) {
  try {
    res.json(await reminderService.create(req.body));
  } catch (err) {
    console.error(`Failed to create a reminder`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await reminderService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Failed to update reminder`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await reminderService.remove(req.params.id));
  } catch (err) {
    console.error(`Failed to delete reminder`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  getMultiple,
  create,
  update,
  remove
};