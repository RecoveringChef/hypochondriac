const router = require("express").Router();
const newsController = require("../../controllers/newsController");

// Matches with "/api/news"
router.route("/")
  .get(newsController.findAll)
  .post(newsController.create);

// Matches with "/api/news/:id"
router
  .route("/:id")
  .get(newsController.findById)
  .put(newsController.update)
  .delete(newsController.remove);

module.exports = router;
