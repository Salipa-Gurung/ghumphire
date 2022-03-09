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
    likes : [ String ],
    dislikes : [ String ],
    comments : [ String ],
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