import mongoose, { Document, Model } from "mongoose";
import { IRoom, Room } from "./Room";

interface IHotel extends Document {
  name: string;
  type: "Hotel" | "Apartments" | "Resorts" | "Villas" | "Cabins";
  city: string;
  address: string;
  distance: number;
  photos: string[];
  desc: string;
  rating: number;
  featured: boolean;
  rooms: IRoom["_id"];
}

const hotelSchema = new mongoose.Schema<IHotel>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Hotel", "Apartments", "Resorts", "Villas", "Cabins"],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    max: 5,
    min: 0,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
});

const Hotel: Model<IHotel> = mongoose.model<IHotel>("Hotel", hotelSchema);

export { IHotel, Hotel };
