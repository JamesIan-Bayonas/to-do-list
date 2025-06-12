import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jamesianbayonas21:iGqUmrFqY2t5cXDe@cluster0.57pgs6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGO DB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the process with failure, because 1 is an indicator that it is an error
  }
};
