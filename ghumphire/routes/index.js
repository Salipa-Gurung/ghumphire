const { log } = require('debug/src/node');
var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();

const Blogs = require('../models/blog.model')

/* GET home page. */
router.get('/',async function(req, res, next) {
const blogs = await Blogs.find({}, {}, { limit: 9 });
console.log(blogs);
res.render('homepage', {blogList : blogs});
});

router.get('/addPost', function(req, res, next) {
  res.render('authorForm');
});

router.post('/requestUpload', async function(req, res, next){
  console.log('requesting to be approved');
  const { authorName, authorEmail, title, content, location, tag, priceRange } = req.body;

  const blogContent = new Blogs({
    authorName,
    authorEmail,
    title,
    content,
    location,
    tag,
    priceRange,
  });

  // console.log(blo)

  const blog = await blogContent.save();
  console.log(blog);
  res.redirect('/');
});

router.get('/home', function(req, res, next) {
  res.render('homepage')
});

router.get('/reviewer', function(req, res, next) {

});

router.get('/author', function(req, res, next) {

});

router.get('/readmore/:id', async function(req, res, next){
  const blog = await Blogs.findOne({ _id:req.params.id });
  res.render('blog-single', { blog : blog });
});
   



module.exports = router;
