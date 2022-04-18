const reminderService = require('../services/reminderService');

const unauthorizedMsg = {
  message: "Cannot manage reminders without credentials! Login first to access it"
}

async function get(req, res, next) {
    try {
      //checkAuthentication(req, res);
      res.json(await reminderService.get(req.params.id));
    } catch (err) {
        next(err);
    }
}

async function getMultiple(req, res, next) {
    try {
      //const user = checkAuthentication(req, res);
      res.json(await reminderService.getMultiple(null))
    } catch (err) {
        next(err);
    }
}
  
async function create(req, res, next) {
  try {
    const user = checkAuthentication(req, res)
    const {recurring, daily, weekly, monthly, yearly} = req.body;

    // TODO: Fix this bitwise wacky operation (Only one can be true)
    if(recurring && !(daily ^ weekly ^ monthly ^ yearly)) {
      throw new Error("There can only be one recurring option")
    }

    const response = await reminderService.create(req.body, user)
    res.json(response);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    //checkAuthentication(req, res);
    
    const {recurring, daily, weekly, monthly, yearly} = req.body;

    if(recurring && !(daily ^ weekly ^ monthly ^ yearly)) {
      throw new Error("There can only be one recurring option")
    }
      
   res.json(await reminderService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    //checkAuthentication(req, res);
    const id = req.params.id;
    await reminderService.remove(id);
    res.json({message: "Reminder deleted: " + id});
  } catch (err) {
    next(err);
  }
}

function checkAuthentication(req, res) {
  const user = req.user;
  if(!user) {
    res.status(401)
    res.json(unauthorizedMsg)
  }
  return user
}

module.exports = {
  get,
  getMultiple,
  create,
  update,
  remove
};