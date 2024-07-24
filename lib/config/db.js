import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kelvinsamuel:kelvinsamuel@cluster0.m7alv2g.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
