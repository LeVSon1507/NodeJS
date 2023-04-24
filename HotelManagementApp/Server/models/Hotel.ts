import mongoose, { Document, Model } from 'mongoose';
import { IRoom, Room } from './Room';

interface IHotel extends Document {
   name: string;
   type: 'Hotel' | 'Apartments' | 'Resorts' | 'Villas' | 'Cabins';
   city: string;
   address: string;
   distance: number;
   photos: string[];
   desc: string;
   rating: number;
   featured: boolean;
   rooms: IRoom['_id'][];
}

const hotelSchema = new mongoose.Schema<IHotel>({
   name: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      enum: ['Hotel', 'Apartments', 'Resorts', 'Villas', 'Cabins'],
      required: true,
   },
   city: {
      type: String,
      required: true,
   },
   address: {
      type: String,
      require: true,
   },
   distance: {
      type: Number,
      require: true,
   },
   photos: {
      type: [String],
   },
   desc: {
      type: String,
      required: true,
   },
   rating: {
      type: Number,
      max: 5,
      min: 0,
   },
   featured: {
      type: Boolean,
      require: true,
      default: false,
   },
   rooms: [
      {
         rooms: [mongoose.Schema.Types.ObjectId],
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Room',
      },
      {
         type: Number,
         ref: 'Room',
      },
   ],
});

const Hotel: Model<IHotel> = mongoose.model<IHotel>('Hotel', hotelSchema);

export { IHotel, Hotel };
