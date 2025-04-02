import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to db");
  } catch (error) {
    console.log("error connecting to mongo db", error.message);
  }
};

export default connectToMongoDB;
