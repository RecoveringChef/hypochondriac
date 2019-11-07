const router = require("express").Router();
const symptomsController = require("../../controllers/symptomsController");

// Matches with "/api/news"
router.route("/")
    .get(symptomsController.findAll)
    .post(symptomsController.create);

// Matches with "/api/news/:id"
router
    .route("/:id")
    .get(symptomsController.findById)
    .put(symptomsController.update)
    .delete(symptomsController.remove);

module.exports = router;