const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect or database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'election'
},
    console.log('Connected to election database')
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});