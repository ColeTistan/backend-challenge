const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error) => {
    if (error) {
        throw error;
    }

    console.log(`Connected to database on ID: ${connection.threadId}`);
});

