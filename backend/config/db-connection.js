const dotenv = require('dotenv');
dotenv.config();

const dbConnection = {
    url: process.env.BLOGS_URI,
}

module.exports = dbConnection;
