const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Symptoms = new Schema({
    name: { type: String, required: true },
    diseases: [{ type: Schema.Types.ObjectId, ref: 'conditions' }]

});


module.exports = mongoose.model('symptoms', Symptoms);