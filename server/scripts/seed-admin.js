import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const seedAdmin = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI is not defined. Create a .env file first.");
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  const email = "admin@googly.com";
  const existing = await User.findOne({ email });

  if (existing) {
    existing.role = "admin";
    await existing.save();
    console.log(`Updated ${email} to admin role`);
  } else {
    const hashed = await bcrypt.hash("admin123", 10);
    await User.create({
      name: "Admin",
      email,
      password: hashed,
      role: "admin",
    });
    console.log(`Created admin user: ${email} / admin123`);
  }

  await mongoose.disconnect();
  console.log("Done.");
};

seedAdmin().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
