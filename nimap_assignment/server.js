const express = require('express');
const mysql = require('mysql');

const app = express();

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'product_management'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Get all categories with pagination
app.get('/categories', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  db.query(`SELECT * FROM categories LIMIT ${limit} OFFSET ${offset}`, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

// Get all products with pagination
app.get('/products', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  db.query(`SELECT p.*, c.CategoryName FROM products p JOIN categories c ON p.CategoryId = c.CategoryId LIMIT ${limit} OFFSET ${offset}`, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

// Start server
app.listen(3003, () => {
  console.log('Server started on port 3003');
});