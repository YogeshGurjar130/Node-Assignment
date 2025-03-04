const mysql = require("mysql2");
const env = require('dotenv');
env.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: "root",
    password: "rootuser",
    database: process.env.DATABASE,
});

connection.connect(err => {
    if (err) {
        console.log("Failed to config database " + err.stack);
    } else {
        console.log("Connected to database")
    }
});

module.exports = connection;