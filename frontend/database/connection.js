const MONGO_URI =
  "mongodb+srv://vestrap:vestrap123@contest.t1l5in5.mongodb.net/test";

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
