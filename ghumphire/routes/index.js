var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('homepage')
});

router.get('/reviewer', function(req, res, next) {

});

router.get('/author', function(req, res, next) {

});


module.exports = router;
