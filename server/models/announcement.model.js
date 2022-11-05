const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    datetime: Date,
    image: String,
    instagram: String,
})

const Announce = mongoose.model("Announcement", announcementSchema);

module.exports = Announce;