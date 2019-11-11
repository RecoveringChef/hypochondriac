const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

const Conditions = new Schema({
    name: { type: String, required: true },
    descrption: { type: String, required: true },
    link: { type: String, required: true },
    symptoms: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Symptom model
            ref: "symptoms"
        }
    ]
});


module.exports = mongoose.model('conditions', Conditions);

