import mongoose from "mongoose";
const connectDb = async () => {
    try {
        console.log("Connecting to DB...")
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected")
    } catch (error) {
        console.error("DB connection error:", error)
    }
    
}
export default connectDb