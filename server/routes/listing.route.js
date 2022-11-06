const express = require('express');
const router = express.Router();

const Listing = require('../models/listing.model');

router.post('/', async (req, res) => {
    try{
        const newListing = new Listing({
            name: req.body.name,
            image: req.body.image,
            caption: req.body.caption,
            contactinfo: req.body.contactinfo,
            date: req.body.date,
            status: req.body.status
        })
        await newListing.save();
        res.status(200).send(newListing);
    }catch(err){
        console.error(err.message);
        res.status(500).send(err.message);
    }
})


router.get('/', async (req, res) => {
    const listings = await Listing.find({}); 
    res.send(listings);
    })


router.put('/', async(req, res)=> {
    const id = req.body._id;
    // console.log(id);
    try{
        const updatingstatus = await Listing.findByIdAndUpdate(id, {status: true});
        res.send(updatingstatus);
    } catch (err){
        console.error(err)
    }
}) 
module.exports = router;