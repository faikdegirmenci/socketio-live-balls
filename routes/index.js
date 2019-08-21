var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getEnv', function(req, res, next) {
  const envData = require('../config/env.json')[process.NODE_ENV || 'development'];
  console.log(envData);
});


module.exports = router;
