// connect or database
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'election'
},
    console.log('Connected to election database')
)

module.exports = db;