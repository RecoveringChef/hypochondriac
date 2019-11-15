const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hypochondriac"
);

const conditionsSeed = [
  // {
  //   name: "Lung Cancer",
  //   description: "Shouldn't have smoked now should you? And if you didnt but got it anyway then sucks to be you I guess.",
  //   link: "https://amzn.to/2JQu9iT",
  // },

  // {
  //   name: "Ebola",
  //   description: "yup, someone got on a plane and brought it to your town. Now despite what you may have heard you may survive this. The three stains of Ebola range from 68% to 92% deadly, so see you're probably only mostly gonna die from it. How lucky do you feel?",
  //   link: "https://amzn.to/2pOx1WX",
  // },

  // {
  //   name: "Motaba",
  //   description: "Surely a disease ahead of it's time. This set the pattern Ebola is soon to follow.",
  //   link: "https://amzn.to/36wSvIt",
  // },


  // {
  //   name: "Cabin Fever",
  //   description: "Did you shoot 6 holes in your freezer? Sometimes you do have to risk the disease and allergy ridden outdoors for your own sanity.",
  //   link: "https://amzn.to/2NJ3eXJ",
  // },

  // {
  //   name: "Leprosy",
  //   description: "You know there are still active leper colonies? You can fall apart among friends. Make sure to warn any of your family not infected to avoid the armidillos so they may avoid your fate",
  //   link: "",
  // },

  // {
  //   name: "Super Flu",
  //   description: "It starts like the flu, but then you die. In extremely rare cases you instead have to walk to nevada while having dreams of an old woman in a rocking chair",
  //   link: "https://amzn.to/34Ggi74",
  // },

  {
    name: "Greyscale",
    description: "Grey patches form on your skin and soon you start to go mad. Exile for you.",
    link: "https://amzn.to/351M52r",
    symptoms: [],
  },

  {
    name: "Diabetes",
    description: "Death by sugar. But so yummy! More cheesecake? Don't worry I am sure your fingers will get used to being stabbed repeatedly.",
    link: "https://amzn.to/2qUTcel",
    symptoms: [],
  },

  {
    name: "Descolada",
    description: "Literally your DNA strands are becoming unwound. This is gonna hurt. A lot. Soon you turn into... something else.",
    link: "https://amzn.to/377lHWP",
    symptoms: [],
  },

  {
    name: "Sleep Apnea",
    description: "Just breathe. Shouldn't be hard now should it? Sleep apnea untreated causes increased risk of heart disease (just ask Carrie Fisher), forgetfulness and inability to focus, headaches, elevated blood CO2, and increased crankiness. Treatments include painful surgery that rarley works, or wearing an uncomfortable Darth Vader mask when trying to get to sleep. Enjoy!",
    link: "https://amzn.to/2CI4V2z",
    symptoms: [],
  },

  {
    name: "Sinusitis",
    description: "Ah, the good old sinus infection. Great to tell people is all you have when you are really going to work sick as a dog and spreading your gunk all over the office. Can often hurt like hell, but is usually knocked out with a few days of antibiotics. UNLESS, of course you have one of the resitant strains. Then good luck kicking that.",
    link: "https://amzn.to/2Qj9JTS",
    symptoms: [],
  },

  {
    name: "Epilepsy",
    description: "SHAKE RATTLE AND ROLL! Just hope you have time to pull over if you're driving.",
    link: "https://amzn.to/33N6OH7",
    symptoms: [],
  },

  {
    name: "Kidney and/or Bladder Stones",
    description: "OOWWWW!!! Holy Peter, Paul, and Mary on a Pogo Stick do these hurt! Have fun passing one of these suckers.",
    link: "https://amzn.to/2NLCzdO",
    symptoms: [],
  },

  {
    name: "Kalavirus",
    description: "Who doesn't hate traveling while sick, or worse who doesn't hate other people who travel while sick. Time travel just makes the whole thing exponentially worse",
    link: "https://amzn.to/2OiFQ3E",
    symptoms: [],
  },

  {
    name: "MEV-1",
    description: "Just stay away from casinos when travelling in Asia",
    link: "https://amzn.to/33Pmc5x",
    symptoms: [],
  },

  {
    name: "Progenitor virus",
    description: "Ahh, good old Progenitor. Father to a whole alphabet soup of sub viruses that each do more horrific things to the living than the last. Don't forget to reload between rooms.",
    link: "https://amzn.to/33Pmc5x",
    symptoms: [],
  },

  {
    name: "Rage virus",
    description: "Who is the bigger dummy? The scientist who creates something like this, or the eco-terrorist who sets it loose from the lab?",
    link: "https://amzn.to/2NMkNqP",
    symptoms: [],
  },

  {
    name: "Mad Zombie Disease",
    description: "You know how these things go: Patient Zero eats a burger made from cattle with advanced Mad Cow disease which then becomes Mad Zombie Disease and then he starts biting people and the whole thing gets out of hand. Just follow the rules and you may pull through this.",
    link: "https://amzn.to/33UdWS8",
    symptoms: [],
  },

  {
    name: "Irritable Bowel Syndrome",
    description: "You hate your gut and your gut hates you. You never know when or where, but you you do know sooner or later it will get you. Probably in the most socially awkward situation possible.",
    link: "https://amzn.to/374huTD",
    symptoms: [],
  },

  {
    name: "Kellis-Amberlee",
    description: "We are all carriers of this ticking time bomb. Avoid large groupings of people and stay out of political intrigue and you might live a long time before the virus goes active in your system.",
    link: "https://amzn.to/2Qi6NHa",
    symptoms: [],
  },

  {
    name: "Solanum",
    description: "While it sounds cool that your brain will no longer require things like oxygen, the downside is you will not be you and it won't really be 'your' brain any longer. At least new not-you will be very hard to kill.",
    link: "https://amzn.to/2XjtkET",
    symptoms: [],
  },

  {
    name: "creutzfeldt-jakob",
    description: "While one in a million unfortunates get this free courtesy of genetics there are also those who get a variant from eating insufficiently cooked beef products from cattle containing Mad Cow Disease. So in 99% of the world make sure to cook all the flavor and juices out of your meat. If you live in one of the very rare countries where this hasn't gotten into the meat supply YET then you can enoy your Medium-Rare for now.",
    link: "https://amzn.to/33NP26v",
    symptoms: [],
  },

  {
    name: "Fibromyalgia",
    description: "The pain centers of your brain fire off like an over revved Ferrari engine to the point where every thing hurts. This just sucks rocks and you get to live with it until someone finds a solution. Good luck, and please don't stab the next fool who tells you 'it's only in your head'.",
    link: "https://amzn.to/32OvH3R",
    symptoms: [],
  },

  {
    name: "Zitka",
    description: "Stay away from tropical islands. Or anyplace warm. Or any place with mosquitos. Or anyone who has been to any of those places.",
    link: "https://amzn.to/2XdDff6",
    symptoms: [],
  },

  {
    name: "Sleeping Sickness",
    description: "Feeling groggy, unfocused, and/or uncoordinated? Feeling like a walking zombie is what this condition is famous for. This insect-borne parasitic disease was almost wiped out but is making a comeback in some parts of the world leading health officials to worry about a medication resistant strain.",
    link: "https://amzn.to/2Kq32f8",
    symptoms: [],
  },

  {
    name: "Flesh-eating Disease",
    description: "Yes this really is as terrifying as you think it is. Just a small unusually painful blister is all it typically starts as, then...",
    link: "https://amzn.to/353OKZy",
    symptoms: [],
  },

  {
    name: "Rabies",
    description: "Have you ever touched a wild animal ever? Or been bitten by anyone or anything? Yes the shots in the stomach hurt, but they are probably still worth it. Probably.",
    link: "https://amzn.to/32M8Khy",
    symptoms: [],
  },

  {
    name: "Urinary Tract Infection",
    description: "Ouch! Sucks to be you! I'm sure the antibiotics will clear that right up. I mean what are the odds you have one of the highly resistant strains?",
    link: "https://amzn.to/33OCOKW",
    symptoms: [],
  },

  {
    name: "Prostate Cancer",
    description: "Don't worry about it. I hear at least some guys have a decent sex life after the surgery.",
    link: "https://amzn.to/33OCOKW",
    symptoms: [],
  },

  {
    name: "Brain Tumor",
    description: "Sorry about your brain dude. Hopefully they can operate, and hopefully you don't come out of the O.R. a vegetable, and hopefully it doesn't come back. I mean what are the odds, right?",
    link: "https://amzn.to/2XmrNhy",
    symptoms: [],
  },

  {
    name: "Alzheimer's",
    description: "What were we looking up again?",
    link: "https://amzn.to/32McZtu",
    symptoms: [],
  },

  // {
  //   name: "Multiple Personalities Disorder",
  //   description: "Some people don't do a whole lot in their life. You get to do a great many things. At least some of you do, how much 'you-you' remembers may be a whole different matter though.",
  //   link: "https://amzn.to/32Jbnkp",
  //   symptoms: [""],
  // }

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
