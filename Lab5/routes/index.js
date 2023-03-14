var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  futbolitas = ['Cristiano Ronaldo','Leo Messi',' Neymar Junior' ]
  res.render('index', { title: 'Express', datos:futbolitas });
});

module.exports = router;
