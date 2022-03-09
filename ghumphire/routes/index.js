var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();

const blogModel = require('../models/blog.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addPost', function(req, res, next) {
  res.render('authorForm');
});

router.post('/requestUpload', function(){
  console.log('requesting to be approved');
  const { authorName, authorEmail, title, content, location, tag, priceRange, like, dislike, comment, approved } = req.body;

  const blogContent = new blogModel({
    authorName,
    authorEmail,
    title,
    content,
    location,
    tag,
    priceRange,
    like,
    dislike,
    comment,
    approved,
  });

  const promise = blogModel.save();
  promise.then((blogModel) => {
    console.log('Blog save');
    res.redirect('/home');
  })
});

router.get('/home', function(req, res, next) {
  res.render('homepage')
});

router.get('/reviewer', function(req, res, next) {

});

router.get('/author', function(req, res, next) {

});


module.exports = router;
