var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ "My initials": "C. L" });
});

module.exports = router;
