import express, { NextFunction, Response, Request } from "express";
import { Hotel } from "../models/Hotel";
import { Transaction } from "../models/Transaction";
import { IRoom, Room } from "../models/Room";

const hotelRouter = express.Router();

export const getHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      result: hotels,
    });
  } catch (error) {
    next(error);
  }
};

//-----------------Get count----------------
export const getCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // -----------------Count by city-----------------
    const hotelsCountByCity = {
      hanoi: await Hotel.countDocuments({ city: "Ha Noi" }),
      hcm: await Hotel.countDocuments({ city: "Ho Chi Minh" }),
      danang: await Hotel.countDocuments({ city: "Da Nang" }),
    };
    //-----------------Count by property type-----------------
    const countByPropertyType = {
      hotel: await Hotel.countDocuments({ type: "hotel" }),
      apartments: await Hotel.countDocuments({ type: "apartments" }),
      resorts: await Hotel.countDocuments({ type: "resorts" }),
      villas: await Hotel.countDocuments({ type: "villas" }),
      cabins: await Hotel.countDocuments({ type: "cabins" }),
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
};

// export const searchHotel = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { city, dateStart, dateEnd, numPeople, numRooms } = req.body;
//     // write a function to get all hotel available in a city on a date range and number of people and number of rooms needed to book for that date range and city and return the list of hotel available in that city on that date range and number of people and number of rooms needed to book for that date range and city 
  
//     const hotelFilter = await Hotel.find({ city })
//     const dayBooked = await Transaction.find({
//       $and: [
//         { dateStart: { $lte: dateEnd } },
//         { dateEnd: { $gte: dateStart } },
//       ],
//     });
//     const hotelBooked = dayBooked.map((item) => item.hotel);
//     const hotelAvailable = hotelFilter.filter(
//       (item) => !hotelBooked.includes(item._id)
//     );
//       // const hotelAvailable = await Hotel.find({
//       //   $and: [
//       //     { city },
//       //     { rooms: { $elemMatch: { numPeople: { $gte: numPeople } } } },
//       //     { rooms: { $elemMatch: { numRooms: { $gte: numRooms } } } },
//       //   ],
//       // });
    

//     res.status(200).json({ results: hotelAvailable });
//   } catch (error) {
//     next(error);
//   }
// };


export const searchHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { city, dateStart, dateEnd, numPeople, numRooms } = req.body;

    // Tìm tất cả các khách sạn trong thành phố được yêu cầu
    const hotels = await Hotel.find({ city });
    // Tìm tất cả các giao dịch có ngày bắt đầu hoặc kết thúc nằm trong khoảng thời gian được yêu cầu
    const dayBooked = await Transaction.find({
      $and: [
        { dateStart: { $in: dateStart } },
        { dateEnd: { $in: dateEnd } },
      ],
    });
    console.log("🚀 ~ file: hotel.ts:113 ~ dayBooked:", dayBooked)
    // Lọc ra danh sách các phòng của các khách sạn đã được đặt trong khoảng thời gian được yêu cầu
    const roomBooked = dayBooked.map((item) => {
      console.log("🚀 ~ file: hotel.ts:115 ~ roomBooked ~ item:", item)
      return item.room
    })
    console.log("🚀 ~ file: hotel.ts:118 ~ roomBooked ~ roomBooked:", roomBooked)
    // Lọc ra danh sách các khách sạn có ít nhất một phòng còn trống
    const hotelAvailable = hotels.filter(
      (item) => !roomBooked.includes(item._id)
    );
   

  


    // Trả về danh sách các khách sạn có sẵn
    res.status(200).json({results: hotelAvailable });
  } catch (error) {
    next(error);
  }
};




//-----------------Get hotel detail----------------
export const getHotelDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.query;
    const hotelDetail = await Hotel.findById(id);
    // const roomsList = await hotelDetail?.rooms?.map((room:IRoom) => {
    //    return  Room.findById(room._id)
    // })
    const roomsList = await Room.find({
      _id: { $in: hotelDetail?.rooms },
    }).exec();
    // .find() trả về một query, chứa tất cả các tài liệu trong bảng Room.

    //$in sẽ trả về tất cả các tài liệu trong bảng Room có trường _id nằm trong danh sách các giá trị _id của các phần tử trong mảng hotelDetail.rooms.

    //.exec() được sử dụng để thực thi query và trả về một promise, chứa danh sách các phòng của khách sạn.
    res.status(200).json({ results: hotelDetail, roomsList: roomsList });
  } catch (error) {
    next(error);
  }
};
export default hotelRouter;
