import mongoose from "mongoose";
import { MONGO_DB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error(error);
  }
};
