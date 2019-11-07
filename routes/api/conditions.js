const router = require("express").Router();
const conditionsController = require("../../controllers/conditionsController");

// Matches with "/api/news"
router.route("/")
    .get(conditionsController.findAll)
    .post(conditionsController.create);

// Matches with "/api/news/:id"
router
    .route("/:id")
    .get(conditionsController.findById)
    .put(conditionsController.update)
    .delete(conditionsController.remove);

module.exports = router;