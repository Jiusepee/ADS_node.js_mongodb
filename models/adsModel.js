const mongoose = require('mongoose');

const adsModel = mongoose.model('Ads', new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
}))

module.exports = adsModel;