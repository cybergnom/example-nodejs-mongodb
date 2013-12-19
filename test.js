var m = require("./mongocon")
var blog_models = require("./blog_models");

//setting a variable from a model..
var PostModel = m.mongoose.model('BlogPost', blog_models.BlogPost);
var post = new PostModel();

console.log(post)

post.title = 'Some title';
post.body  = 'Some text';
post.date  = Date.now();

//setting a title and author on a comment
post.comments.push({
    title: 'My comment',
    author: 'Any author'
});

//save a post
post.save(function (err) {
    if (!err) console.log('Saved Successfully!');
});

//find all posts
PostModel.find({}, function (err, doc) {
    console.log(doc)
})

//delete all posts
PostModel.remove({}, function (err, doc) {
    console.log(doc)
})
