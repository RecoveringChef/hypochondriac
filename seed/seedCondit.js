const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hypochondriac"
);

const conditionsSeed = [
  {
    name: "Lung Cancer",
    description: "Shouldn't have smoked now should you? And if you didnt but got it anyway then sucks to be you I guess.",
    link: "https://amzn.to/2JQu9iT",

  },

  {
    name: "Ebola",
    description: "yup, someone got on a plane and brought it to your town. Now despite what you may have heard you may survive this. The three stains of Ebola range from 68% to 92% deadly, so see you're probably only mostly gonna die from it. How lucky do you feel?",
    link: "https://amzn.to/2pOx1WX",

  },

  {
    name: "Motaba",
    description: "Surely a disease ahead of it's time. This set the pattern Ebola is soon to follow.",
    link: "https://amzn.to/36wSvIt",

  },


  {
    name: "Cabin Fever",
    description: "Did you shoot 6 holes in your freezer? Sometimes you do have to risk the disease and allergy ridden outdoors for your own sanity.",
    link: "https://amzn.to/2NJ3eXJ",

  },

  {
    name: "Leprosy",
    description: "You know there are still active leper colonies? You can fall apart among friends. Make sure to warn any of your family not infected to avoid the armidillos so they may avoid your fate",
    link: "",

  },

  {
    name: "Super Flu",
    description: "It starts liek the flu, but then you die. In extremely rare cases you instead have to walk to nevada while having dreams of an old woman in a rocking chair",
    link: "https://amzn.to/34Ggi74",

  }
];


db.Conditions.collection.insertMany(conditionsSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
