import { Signup } from "../models/users.model.js";
import usersController from "../controller/users.controller.js";
import express from "express";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.route("/signup").post(usersController.createUser);
router.route("/login").post(usersController.loginUser);
router.route("/").get(auth, usersController.getUserData);

export default router;
