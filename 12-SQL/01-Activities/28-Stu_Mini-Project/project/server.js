const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'RootyTooty484',
        database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
);

// Query database


app.get('/api/movies', function (req, res) {
    let sql = 'SELECT * FROM movies';

    db.query(sql, (err, results) => {
        console.log(results);
        res.json({
            message: 'success',
            data: results
        })
    });
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});