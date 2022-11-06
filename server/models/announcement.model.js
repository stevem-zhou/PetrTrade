const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    date: String,
    time: String,
    image: String,
    instagram: String,
})

const Announce = mongoose.model("Announcement", announcementSchema);

module.exports = Announce;  