import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

 const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    } catch (error) {
        console.log(error.message)
    }
}
export default connectDB