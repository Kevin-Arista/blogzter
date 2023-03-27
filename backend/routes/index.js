// this router contains our landing page
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("This is the landing page for Blogzter!");
})


module.exports = router;
