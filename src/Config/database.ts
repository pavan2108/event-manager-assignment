import mongoose from "mongoose";
import { config } from "dotenv";

config();

const { MONGODB_URI } = process.env;

const db = mongoose.connection;

const connect = () => {
    mongoose.connect(
        `${MONGODB_URI}`,
    );
};

db.on("error", (error) => console.log("Error in connection", error));
db.once("open", () => console.log("Connected to MongoDB"));

export default connect;