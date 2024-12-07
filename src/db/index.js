import mongoose from "mongoose";

import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log(`\nMongoDB connected!\nDB host: ${connection.connection.host}`);
    } catch (error) {
        console.log("ERROR : connectDB failed! - ",error);
        process.exit(1);
    }
}

export { connectDB };
