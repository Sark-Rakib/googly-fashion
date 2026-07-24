import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not defined in .env");

  const conn = await mongoose.connect(uri);
  return conn.connection.host;
};

export default connectDB;
