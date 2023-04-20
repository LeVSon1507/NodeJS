import express from 'express';
import { login, register } from '../controller/user';
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;