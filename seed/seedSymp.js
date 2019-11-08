const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hypochondriac"
);

const symptomSeed = [
    {
        name: "Flu Like Symptoms",

    },
    {
        name: "Cough",

    },
    {
        name: "Fever",

    },
    {
        name: "Runny Nose",

    },
    {
        name: "Stuffy Nose",

    }
];




db.Symptoms.collection.insertMany(symptomSeed)
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
