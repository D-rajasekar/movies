import { Signup } from "../models/users.model.js";
import { Session } from "../models/sessions.js";

async function createUsersquery({username, password}) {
  try {

    return await Signup.create({ username, password });
  } catch (error) {
    return { msg: error.errors.map((ele) => ele.message).join() };
  }
}

async function getUserByName(username){
  return await Signup.findOne({
      where:{
          username,
      }
  })
}

async function getUserService(){
  return await Signup.findAll();
}

async function createSessionFunction(userid, token) {
  return await Session.create({ userid, token });
}


export default { createUsersquery,getUserByName,getUserService ,createSessionFunction};
