import  { NextFunction, Response, Request } from "express";
import { User } from "../models/User";
import crypto from 'crypto'

export const register = async (req: Request, res: Response, next: NextFunction) => {
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

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      //tìm user có trong database
      const user = await User.findOne({ email });

      //check nếu 0 có user hoặc password của user trong database !== request password
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      //tạo token random
    const token = crypto.randomBytes(64).toString('hex');

      return res.status(200).json({...user, token});
    } catch (error) {
      next(error);
    }
  }

export default { register, login};
