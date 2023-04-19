import { Document, Model, model, Schema } from "mongoose";

interface IRoom extends Document {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: number[];
}

const roomSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: {
    type: [Number],
    required: true,
  },
});

const Room: Model<IRoom> = model<IRoom>("Room", roomSchema);

export { IRoom, Room };
