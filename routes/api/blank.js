const router = require("express").Router();
const blankController = require("../../controllers/blankController");

// Matches with "/api/books"
// router.route("/")
//   .get(blankController.findAll)
//   .post(blankController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(blankController.findById)
//   .put(blankController.update)
//   .delete(blankController.remove);

module.exports = router;