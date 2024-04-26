import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DBConnection = await mongoose.connect(process.env.MONGO_DB_URI);

    console.log(`MongoDB Connected: ${DBConnection.connection.host}`);
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }  
}

export default connectDB;