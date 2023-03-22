// this router contains our posts router
const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next)=>{
    res.send('This is how you can make a blog... /n Are you ready? Click below')
});

router.post('/makepost', (req, res, next)=>{
    res.send('Form to make blog');
})

router.get('/all', (req, res, next)=>{
    res.send('This is where you can see all the blogs');
});

module.exports = router;