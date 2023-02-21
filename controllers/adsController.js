const adsModel = require('../models/adsModel');

const createAds = async (req, res) => {
    if (!req.body.user || !req.body.title || !req.body.description || !req.body.price) res.status(404).send("Not Found")

    const ad = await adsModel.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        user: req.body.user
    })

    res.status(200).json(ad);
}

const getAds = async (req, res) => {
    const ads = await adsModel
        .find()
        .populate('user', 'name email')
        .select("title")
    
    res.status(200).json(ads);
}

const deleteAds = async (req, res) => {
    try {
        const ads = await adsModel.findById(req.params.id)
        if (!ads) {
            return res.status(404).send("Not Found")
        }
        await adsModel.deleteOne({ _id: req.params.id })
        res.status(200).json(ads)
    } catch (err) {
        console.log(err)
        res.status(500).send("Server Error")
    }
}

module.exports = { createAds, getAds, deleteAds }