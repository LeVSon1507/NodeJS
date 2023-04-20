import express, { NextFunction, Response, Request } from 'express';
import { Hotel } from '../models/Hotel';
import { Transaction } from '../models/Transaction';
import { Room } from '../models/Room';
const hotelRouter = express.Router();

hotelRouter.get('/hotel', async (req: Request, res: Response, next: NextFunction) => {
   try {
      const hotels = await Hotel.find();
      res.status(200).json({
         result: hotels,
      });
   } catch (error) {
      next(error);
   }
});

//-----------------Get count----------------
hotelRouter.get('/hotel/getCount', async (req: Request, res: Response, next: NextFunction) => {
   try {
      // -----------------Count by city-----------------
      const hotelsCountByCity = {
         hanoi: await Hotel.countDocuments({ city: 'Ha Noi' }),
         hcm: await Hotel.countDocuments({ city: 'Ho Chi Minh' }),
         danang: await Hotel.countDocuments({ city: 'Da Nang' }),
      };
      //-----------------Count by property type-----------------
      const countByPropertyType = {
         hotel: await Hotel.countDocuments({ type: 'hotel' }),
         apartments: await Hotel.countDocuments({ type: 'apartments' }),
         resorts: await Hotel.countDocuments({ type: 'resorts' }),
         villas: await Hotel.countDocuments({ type: 'villas' }),
         cabins: await Hotel.countDocuments({ type: 'cabins' }),
      };

      //-----------------Top 3 rated hotels-----------------
      //-1 là thứ tự giảm dần, 1 là thứ tự tăng dần
      const topRates = await Hotel.find().sort({ rating: -1 }).limit(3);
      res.status(200).json({
         result: {
            countByCity: hotelsCountByCity,
            countByType: countByPropertyType,
            topRates: topRates,
         },
      });
   } catch (error) {
      next(error);
   }
});

//--search hotel---
hotelRouter.get('/hotel/search', async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { city, checkInDate, checkOutDate, maxRooms, maxPeople } = req.body;
      //ds A
      const hotels = await Hotel.find({ city });
      // Lọc danh sách phòng theo tiêu chí số lượng người
      
      res.status(200).json();
   } catch (error) {
      next(error);
   }
});

export default hotelRouter;
