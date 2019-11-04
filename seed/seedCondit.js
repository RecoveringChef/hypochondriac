const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hypochondriac"
);

const conditionsSeed = [
  {
    name: "Super Flu",
    description: "Starts like the regular flu, but then you either die (most likely) or get to walk to Las Vegas",
    link: "https://amzn.to/2qj6iSk"
  },

];

db.Conditions
  .remove({})
  .then(() => db.Conditions.collection.insertMany(conditionsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
