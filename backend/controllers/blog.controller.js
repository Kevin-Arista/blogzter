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
    res.send("Form to make blog");
};

module.exports = { blog_list_get ,blog_create_post };