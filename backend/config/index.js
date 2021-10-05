import dotenv from 'dotenv'

dotenv.config();

export default {
    nodeEnv:process.env.NODE_ENV,
    port:process.env.PORT,
    mongoUri:process.env.MONGO_URI,
    jwtSecret:process.env.JWT_SECRET,
    paypalClientId: process.env.PAYPAL_CLIENT_ID,
    isDev: process.env.NODE_ENV === 'development'
}