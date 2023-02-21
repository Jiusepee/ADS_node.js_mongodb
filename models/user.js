const mongoose = require('mongoose');

const userModel = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },

}));

module.exports = userModel;