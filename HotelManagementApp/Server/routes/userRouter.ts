import express from 'express';
import { getTransaction, login, register, transaction } from '../controller/user';
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/transaction', transaction);
userRouter.get('/user/transaction', getTransaction);


export default userRouter;
