import { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export const connectDB = async () => {
    try {
        const connectionInstance = await connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");

    } catch (error) {
        console.log(error,"MongoDB no connected");
        process.exit(1);
    }
}