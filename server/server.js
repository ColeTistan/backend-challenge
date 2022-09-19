// import dependencies for server
const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');

// configures dotenv file
dotenv.config();

// create app
const app = express();
let port = process.env.PORT || 5000;

const pool = require('./connectDB')


app.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`connected to ID: ${connection.threadId}`);
    
        connection.query('SELECT * FROM Pizza', (err, rows) => {
            connection.release()
            if (err) {
                console.error(err)
            } else {
                console.log(rows)
                res.send(rows)
            }
        })
    })
})

// listen to server port
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});