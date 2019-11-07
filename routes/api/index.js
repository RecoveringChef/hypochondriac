const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const newsRoutes = require("./news");
const symptomsRoutes = require("./symptoms");
const conditionsRoutes = require("./conditions");


//User Routes
router.use("/users", userRoutes);
router.use("/news", newsRoutes);
router.use("/symptoms", symptomsRoutes);
router.use("/conditions", conditionsRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
