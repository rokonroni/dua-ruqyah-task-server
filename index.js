const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

const db = new sqlite3.Database('./dua_main.sqlite');

// Endpoint to fetch all categories
app.get('/api/categories', (req, res) => {
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(rows);
  });
});
// Endpoint to fetch all duas
app.get('/api/duas', (req, res) => {
  db.all('SELECT * FROM dua', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(rows);
  });
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
