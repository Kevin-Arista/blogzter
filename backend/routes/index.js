// this router contains our landing page
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send('This is the Blogzter landing page! (description of page )');
})


module.exports = router;
