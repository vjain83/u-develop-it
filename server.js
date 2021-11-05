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
//      QUERIES
// Select all candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })
// Select candiate by id
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// })
// Delete Cindidated by id
// db.query(`DELETE FROM candidates WHERE id =?`, 1, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// })

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

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