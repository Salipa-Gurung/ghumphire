const { log } = require('debug/src/node');
var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();

const Blogs = require('../models/blog.model')

/* GET home page. */
router.get('/',async function(req, res, next) {
  const blogs = await Blogs.find({ approved: true }, {}, { limit: 3 });
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
    title: title ? title : 'Title here',
    content : content ? content : 'Description here' ,
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
  Blogs.find({ approved: { $ne: true } }).exec(function(err, blogs){
    res.render('reviewer', { blogList: blogs });
  })
});

router.get('/author', function(req, res, next) {

});

router.get('/readmore/:id', async function(req, res, next){
  const blog = await Blogs.findOne({ _id:req.params.id });
  res.render('blog-single', { blog : blog, isReviewer: false });
});

router.get('/review/:id', async function(req, res, next){
  const blog = await Blogs.findOne({ _id: req.params.id });
  res.render('blog-single', { blog : blog, isReviewer: true });
});
   
router.get('/explore', function(req, res, next) {
  Blogs.find({ approved: true }).exec(function(err, blogs){
    res.render('explore', { blogList: blogs });
  })
});

router.get('/approve-blog/:id', async function(req, res, next) {
  await Blogs.updateOne({ _id: req.params.id }, { $set: { approved: true }});
  res.redirect(`/review/${ req.params.id } `);
});


module.exports = router;
