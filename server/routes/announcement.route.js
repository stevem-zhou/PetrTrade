const express = require('express');
const router = express.Router();
const Announce = require('../models/announcement.model');

router.get("/", async (req, res) => {
    const data = await Announce.find().sort({date: 1, time: 1});
    res.send(data)
})


router.post("/", async (req, res) => {
    const newDrop = new Announce({
        date: new Date(req.body.date).toJSON(),
        time: req.body.time,
        image: req.body.image,
        instagram: req.body.instagram
    })

    await newDrop.save()
    res.send(newDrop)
})

module.exports = router;