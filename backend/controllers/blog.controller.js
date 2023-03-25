const BlogModel = require("../models/blog.model.js");

// Display list of all Blogs.
const blog_list_get = (req, res) => {
    res.send("This is where you can see all the blogs");
};

// Display form to make blog
const blog_create_get = (req, res) =>{
    res.send("Form to make blog")
}
// Handle to create a blog on POST.
const blog_create_post = (req, res) => {
    res.send("Form to make blog");
};

module.exports = { blog_list_get, blog_create_get ,blog_create_post };