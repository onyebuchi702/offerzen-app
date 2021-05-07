var express = require('express');
var router = express.Router();
var interviews = require('../mockdata/interviews.js')

router.get('/get', async function(req, res, next) {
  const response = interviews
  res.send(response);
});

module.exports = router;
