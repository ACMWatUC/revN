var express = require('express');
var router = express.Router();

/* GET users listing. */

// Get user by ID
router.get('/', function (req, res, next) {
  res.send(`Name: ${req.query['username']}`);
});

module.exports = router;