const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hypochondriac"
);




db.Conditions
    .findOneAndUpdate({ _id: "5dc" }, { symptoms: ["5dc4fa", "52f9"] }
    )
    .then(dbModel => console.log(dbModel))

    .catch(err => console.log(422).json(err));

