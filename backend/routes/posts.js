// this router contains our posts router

const express = require('express');
const router  = express.Router();
const blog_controller = require('../controllers/blog.controller.js');

// GET request for listing all blogpost
router.get('/', blog_controller.blog_list_get);

// GET to acces for, POST to send request to create blog
// router.get('/post', blog_controller.blog_create_get)
router.post('/post', blog_controller.blog_create_post);

module.exports = router;