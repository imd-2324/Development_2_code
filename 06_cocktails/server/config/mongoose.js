import mongoose from "mongoose";
import { MONGO_URI } from "../consts.js";

const connectToDB = async () => {
  await mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectToDB;
