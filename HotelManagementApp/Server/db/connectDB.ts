import mongoose, { ConnectOptions } from "mongoose";

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

const connectDB = async () => {
  const dbUri = "mongodb://localhost:27017/HotelAppDB" as string;
  try {
    await mongoose.connect(dbUri, mongoOptions);
    console.log("MongoDB connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
