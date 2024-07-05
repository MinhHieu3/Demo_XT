import express from 'express';
import {createUser, login} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.post('/login',login);
export default userRouter;
