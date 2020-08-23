const router = require("express").Router();
const blankRoutes = require("./blank");

// Book routes
router.use("/blank", blankRoutes);

module.exports = router;