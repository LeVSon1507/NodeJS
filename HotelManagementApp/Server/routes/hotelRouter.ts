import express from "express";
import {
  getCount,
  getHotel,
  getHotelDetail,
  searchHotel,
} from "../controller/hotel";
const hotelRouter = express.Router();

hotelRouter.get("/hotel", getHotel);

//-----------------Get count----------------
hotelRouter.get("/hotel/getCount", getCount);
//------------------search hotel---------------
hotelRouter.post("/hotel/search", searchHotel);

//-----------------Get hotel detail----------------
hotelRouter.get("/hotel/getHotelDetail", getHotelDetail);

export default hotelRouter;
