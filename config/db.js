const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (err){
        console.error("Could not connect to MongoDB", err);
    }
}

module.exports = connectDB;