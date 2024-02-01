const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

const db = new sqlite3.Database('./dua_main.sqlite');



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
