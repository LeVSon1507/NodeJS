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

export const searchHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { city, dateStart, dateEnd, numPeople, numRooms } = req.body;
    let hotelFilter = await Hotel.find({ city }).populate({
      path: "rooms",
      match: {
        maxPeople: { $gte: numPeople },
      },
    });
    if (typeof dateStart === "string" && typeof dateEnd === "string") {
      const hotelIds = hotelFilter
        .map((hotel) => hotel?._id)
        .filter((id) => id != null);
      hotelFilter = hotelFilter.filter((hotel) =>
        hotel.rooms.map(
          (room: IRoom) =>
            hotelIds.includes(room._id) &&
            !Transaction.exists({
              hotel: hotel._id,
              room: room._id,
              dateStart: { $lt: new Date(dateEnd) },
              dateEnd: { $gt: new Date(dateStart) },
            })
        )
      );
    }
    res.status(200).json({ results: hotelFilter });
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
