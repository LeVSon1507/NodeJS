import mongoose, { Model } from "mongoose";
import { IHotel } from "./Hotel";
import { IUser } from "./User";
import { IRoom } from "./Room";

// Define the fields of the Transaction model
interface ITransaction extends mongoose.Document {
  user: string;
  hotel: IHotel["_id"];
  room: [{ idRoom: IRoom["_id"]; roomNumber: number }];
  checkIn: Date;
  dateStart: Date;
  dateEnd: Date;
  price: number;
  payment: "Card" | "Cash";
  status: "Booked" | "Checkin" | "Checkout";
}

const transactionSchema = new mongoose.Schema<ITransaction>({
  user: {
    type:String,
    required: true
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  room: [{
    idRoom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
    },
  }],
  checkIn: {
    type: Date,
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  payment: {
    type: String,
    enum: ["Card", "Cash"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Booked", "Checkin", "Checkout"],
    required: true,
  },
});

const Transaction: Model<ITransaction> = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);

export { ITransaction, Transaction };
