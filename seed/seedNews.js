const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hypochondriac"
);

const storiesSeed = [
    {
        headline: "",
        description: " "
    },

];

db.News
    .remove({})
    .then(() => db.News.collection.insertMany(storiesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
