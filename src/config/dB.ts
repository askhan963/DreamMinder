
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "");
        console.log("Connect to MongoDb : ",conn.connection.host);
    } catch (error) {
        console.log("Can not Connect to DB...")
    }
}

export default connectDb;