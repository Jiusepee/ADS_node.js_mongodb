const User = require('../models/user.js');

const createUser = async (req, res) => {
    if (!req.body.name || !req.body.email) res.status(404).send("Not Found")

    const user = new User({
        name: req.body.name,
        email: req.body.email,
    })

    const result = await user.save();
    res.status(200).send(result);
}

module.exports = { createUser };