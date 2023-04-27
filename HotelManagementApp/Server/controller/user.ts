import { NextFunction, Response, Request } from 'express';
import { User } from '../models/User';
import crypto from 'crypto';
import { Transaction } from '../models/Transaction';
import { Hotel } from '../models/Hotel';

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
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { email, password } = req.body;

      //tìm user có trong database
      const user = await User.findOne({ email });
      console.log('🚀 ~ file: user.ts:28 ~ login ~ user:', user);

      //check nếu 0 có user hoặc password của user trong database !== request password
      if (!user || user.password !== password) {
         return res.status(401).json({ message: 'Invalid credentials' });
      }

      //tạo token random
      const token = crypto.randomBytes(64).toString('hex');

      return res.status(200).json({ ...user, token });
   } catch (error) {
      next(error);
   }
};

export const transaction = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { user, hotel, room, checkIn, dateStart, dateEnd, price, payment, status } =
         req.body;
      const transaction = new Transaction({
          user,
         hotel,
         room,
         checkIn,
         dateStart,
         dateEnd,
         price,
         payment,
         status,
      });
      const newTransaction = await transaction.save();
      return res.status(200).json({ results: newTransaction });
   } catch (error) {
      next(error);
   }
};


export const getTransaction = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const username = req.query.username;
     const transactions = await Transaction.find({ user: username });
     const hotelIds = transactions.map((item) => item.hotel);
     const hotels = await Hotel.find({ _id: { $in: hotelIds } });
 
     const transactionResults = transactions.map((transaction) => {
       const hotel = hotels.find((hotel) => hotel._id.toString() === transaction.hotel.toString());
       const hotelName = hotel ? hotel.name : "";
       return { ...transaction.toObject(), hotelName };
     });
 
     return res.status(200).json({ results: transactionResults });
   } catch (error) {
     next(error);
   }
 };

export default { register, login, transaction,getTransaction };
