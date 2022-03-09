var mongoose = require('mongoose')

const BlogScheme = mongoose.Schema({
    id: Number,
    authorName : String,
    authorEmail : String,
    title : String,
    content : String,
    location : String,
    tag : [String],
    priceRange : String,
    like : [Number],
    dislike : [Number],
    comment : [String],
    approved : {
        type : Boolean,
        default : false,
    },
    friendly: {
        type : Boolean,
        default : false,
    },
});

module.exports = mongoose.model('Blogs', BlogScheme)