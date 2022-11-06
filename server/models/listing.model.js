const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  name: String,
  image: String,
  caption: String,
  contactinfo: String,
  date: String,
  status: {type: Boolean,
    default:false},
});
const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;


