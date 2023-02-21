require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());

const { createUser } = require('./controllers/userController');
const { createAds, getAds, deleteAds } = require('./controllers/adsController');

app.post("/api/user", createUser);
// CREATE USER
// {
//     "name": "",
//     "email": ""
// }

app.post("/api/ads", createAds);
// CREATE ADS
// {
//     "title": "",
//     "description": "",
//     "price": "",
//     "user": ""
// }

// GET ADS
app.get("/api/ads", getAds);

// DELETE ADS
app.delete("/api/ads/:id", deleteAds);




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})