const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Stories = new Schema({
    headline: { type: String, required: true },
    descrption: { type: String, required: true }
});


module.exports = mongoose.model('news', Stories);