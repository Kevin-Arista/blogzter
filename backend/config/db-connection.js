const dotenv = require('dotenv');
dotenv.config();

const dbConnection = {
    url: process.env.BLOGZTER_DB_URI,
}

module.exports = dbConnection;
