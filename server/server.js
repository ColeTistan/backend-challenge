// import dependencies for server
const express = require('express');
const dotenv = require('dotenv');

require('./connectDB');

// configures dotenv file
dotenv.config();

// create app
const app = express();
let port = process.env.PORT || 5000;


// listen to server port

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});