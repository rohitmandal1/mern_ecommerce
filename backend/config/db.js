import mongoose from 'mongoose';
import config from './index.js';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB