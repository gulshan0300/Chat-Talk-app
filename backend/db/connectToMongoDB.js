import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async() => {
    const url=process.env.MONGO_URI;
    console.log(url);
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongodb")
    } catch (error) {
        console.log("Error connecting to MongoDB" , error.message)
    }
}

export default connectToMongoDB;