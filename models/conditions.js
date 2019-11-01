const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

const Conditions = new Schema({
    name: { type: String, required: true },
    descrption: { type: String, required: true },
    link: { type: String, required: true }

});


module.exports = mongoose.model('conditions', Conditions);
