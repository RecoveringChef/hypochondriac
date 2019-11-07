const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hypochondriac"
);

const storiesSeed = [
    {
        headline: "Ebola Coming Soon to Your Town",
        description: "In a rare moment of honesty W.H.O. officials have admitted the current Ebola outbreak has been found well outside the supposed 'containment ring' which had already been expanded mutiple times. Current cases are reported in at least five coutnries, at least officially. Sreenings for travellers from affected areas are to check for passengers showing flu-like symptoms; however carriers of the virus can be transmitting the deadly virus for days before showing the first symptoms themselves. Thus the odds of Ebola making it to Europe, Asia, Oceania, and the Americas is increasign daily (just like the number of cases in those affected countries). The three main strains of the virus vaary in fatality rates from just 68% to over 90%. However even if you are one of th elucky ones to survive chances are you will have life long and life altering after effects from the disease. ",
    },

];

db.News.collection.insertMany(storiesSeed)
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
