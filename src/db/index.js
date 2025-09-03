import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
  const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log("Database connected successfully");
    // console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Database connection error:", error);
   process.exit(1); // Exit the process with failure
  }
}

export default connectDB;