const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hypochondriac"
);

const symptomSeed = [
    // { name: "Flu Like Symptoms",  },
    // { name: "Cough",  },
    // { name: "Fever",  },
    // { name: "Runny Nose", },
    // { name: "Stuffy Nose", }
    // { name: "Memory Loss", },
    // { name: "Irritability", },
    // { name: "Difficult Urination", },
    // { name: "Frequent Urination", },
    // { name: "Diarrhea", },
    // { name: "Swollen Nodes", },
    // { name: "Seizures", },
    // { name: "Vomitting", },
    // { name: "Anxiety", },
    // { name: "Headache", },
    // { name: "Sleepiness", },
    // { name: "Sores", },
    // { name: "Rash", },
    // { name: "Muscle Soreness", },
    // { name: "Personality Change", },
    // { name: "Hallucinations", },
    // { name: "Joint or Bone Pain", },
    // { name: "Nausea", }
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
