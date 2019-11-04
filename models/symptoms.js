const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Symptoms = new Schema({
    name: { type: String, required: true }

});


module.exports = mongoose.model('symptoms', Symptoms);