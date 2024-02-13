import { Signup } from "../models/users.model.js";
import usersServices from "../services/users.services.js";
import UsersService from "../services/users.services.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


async function genHashPassword(userPassword) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  console.log(salt);
  const hashedPassword = await bcrypt.hash(userPassword, salt);
  console.log(hashedPassword);
  return hashedPassword;
}
async function getUserData(request,response){
    const userData=usersServices.getUserService();
    response.send(await userData);
}
async function createUser(request, response) {
  console.log(request.body);
  const { username, password } = request.body;
  if (password.length <= 8) {
    response.status(400).send({
      msg: "password should be more than 8 charcters",
    });
  } else {
    const hashedPassword = await genHashPassword(password);
    console.log(hashedPassword);
    response.send(
      await usersServices.createUsersquery({
        username,
        password: hashedPassword,
      })
    );
  }
}

async function loginUser(request, response) {
  const { username, password } = request.body;
  const UserFromDB = await usersServices.getUserByName(username);
  console.log(UserFromDB);

  if (!UserFromDB) {
    response.status(401).send({ msg: "Invalid request" });
  } else {
    const ispasswordcheck = await bcrypt.compare(password, UserFromDB.password);
    if (ispasswordcheck) {
        const token=jwt.sign({id:UserFromDB.id},process.env.SECRET_KEY)
      response.send({ msg: "login successful",token });
    }
  }
}

export default { createUser, loginUser ,getUserData};
