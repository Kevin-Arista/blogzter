/** 
 * This file creates out server
 */ 

// import modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// importing routes
const indexRouter = require('./routes/index.js');
const postsRouter = require('./routes/posts.js');
const { dbConnection } = require('./config/db-connection.js');
// set port number
dotenv.config();
const app = express();
const PORT =  process.env.PORT || 5000;


// middleware
app.use(express.json());
app.use(cors());

// set routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);

// connect to db
mongoose.set('strictQuery', true);
mongoose.connect(dbConnection.url)
    .then(()=>{
        console.log("connected to mongodb");
    },
    err=>{
        console.log("connection failed");
    }
)


// run server
app.listen(PORT, () => {
    console.log(`Serving running on port # ${PORT}!`);
  });