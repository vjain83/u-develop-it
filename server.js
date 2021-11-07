const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

//moved the code to respective condidate route file
// // Select candiate by id
// app.get('/api/candidate/:id', (req, res) => {
//     const sql = `SELECT candidates. * , parties.name AS party_name FROM 
//     candidates LEFT JOIN parties ON candidates.party_id = parties.id  WHERE candidates.id = ?`;
//     const params = [req.params.id];
//     db.query(sql, params, (err, row) => {
//         if (err) {
//             res.status(400).json({ error: err.message })
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         })
//     })
// })

// // Delete Cindidated by id
// app.delete('/api/candidate/:id', (req, res) => {
//     const sql = `DELETE FROM candidates WHERE id = ?`;
//     const params = [req.params.id];
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message })
//         }
//         else if (!result.affectedRows) {
//             res.json({
//                 message: 'Candidate not found'
//             })
//         }
//         else {
//             res.json({
//                 message: 'Deleted',
//                 changes: result.affectedRows,
//                 id: req.params.id
//             });
//         }
//     });
// });

// Create a candidate

// app.post('/api/candidate', ({ body }, res) => {
//     const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
//     if (errors) {
//         res.status(400).json({ error: errors });
//         return;
//     }
//     const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
//   VALUES (?,?,?)`;
//     const params = [body.first_name, body.last_name, body.industry_connected];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });

// });
// end point to get candidates data with parties detail
// app.get('/api/candidates', (req, res) => {
//     const sql = `SELECT candidates. * , parties.name AS party_name FROM 
//     candidates LEFT JOIN parties ON candidates.party_id = parties.id`;
//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });
// // to Get data for parties
// app.get('/api/parties', (req, res) => {
//     const sql = `SELECT * FROM parties`;
//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message })
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// // get data for single party by it's id
// app.get('/api/party/:id', (req, res) => {
//     const sql = `SELECT * FROM parties WHERE id = ?`;
//     const params = [req.params.id];
//     db.query(sql, params, (err, row) => {
//         if (err) {
//             res.status(400).json({ error: err.message })
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });
// // delete single party information
// app.delete('/api/party/:id', (req, res) => {
//     const sql = `DELETE FROM parties WHERE id = ?`;
//     const params = [req.params.id];
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: res.message });
//             // checks if anything was deleted
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Party not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.id
//             });
//         }
//     });
// });

// // Update a candidate's party
// app.put('/api/candidate/:id', (req, res) => {
//     const error = inputCheck(req.body, 'party_id')
//     if (error) {
//         res.status(400).json({ error: error })
//         return
//     }
//     const sql = `UPDATE candidates SET party_id = ? 
//                  WHERE id = ?`;
//     const params = [req.body.party_id, req.params.id];
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             // check if a record was found
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Candidate not found'
//             });
//         } else {
//             res.json({
//                 message: 'success',
//                 data: req.body,
//                 changes: result.affectedRows
//             });
//         }
//     });
// });
// app.use((req, res) => {
//     res.status(404).end();
// });
