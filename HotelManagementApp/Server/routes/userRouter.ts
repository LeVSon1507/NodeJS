import express, { NextFunction, Response, Request } from "express";
import { User } from "../models/User";

const userRouter = express.Router();

userRouter.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password, fullName, phoneNumber, email } = req.body;
      const user = new User({
        username,
        password,
        fullName,
        phoneNumber,
        email,
      });
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);
userRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;

      //tìm user có trong database
      const user = await User.findOne({ username });

      //check nếu 0 có user hoặc password của user trong database !== request password
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default userRouter;
