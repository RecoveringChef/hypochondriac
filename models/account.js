const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    saves: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the conditions model
            ref: "conditions"
        }
    ]

});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
