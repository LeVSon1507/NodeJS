import mongoose, { Document, Model } from "mongoose";

// Define the fields of the User model
interface IUser extends Document {
  username: string;
  password: string;
  fullName: string;
  phoneNumber: number;
  email: string;
  isAdmin: boolean;
}

// Define the schema for the User model
const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Define the User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export { User, IUser };
