const BlogModel = require("../models/blog.model.js");

// Display list of all Blogs.
const blog_list_get = (req, res) => {
      BlogModel.find({}, (err, blogs) =>{
        if(err) {
            res.status(500).send({
                status: 500,
                msg: 'No Blogs Available.'
            });
        }
        res.status(200).send(blogs)
    })
};

// Handle to create a blog on POST.
const blog_create_post = (req, res) => {
    const incomingData = req.body;
    const newBlog = new BlogModel(incomingData);

    newBlog.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: 'Error Occured. Could not create blog. Sorry.'
            });
        };

        res.status(200).send({
            message: 'Blog successfully created.',
            document: doc
        });
    });
};

module.exports = { blog_list_get ,blog_create_post };