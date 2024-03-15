const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'product_management'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

app.get('/categories', (req, res) => {
  db.query('SELECT * FROM categories', (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.post('/categories', (req, res) => {
  const category = req.body;
  db.query('INSERT INTO categories SET ?', category, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.put('/categories/:id', (req, res) => {
  const category = req.body;
  db.query('UPDATE categories SET ? WHERE id = ?', [category, req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.delete('/categories/:id', (req, res) => {
  db.query('DELETE FROM categories WHERE id = ?', req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/products', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const offset = (page - 1) * pageSize;

  db.query('SELECT * FROM products LIMIT ?, ?', [offset, pageSize], (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.post('/products', (req, res) => {
  const product = req.body;
  db.query('INSERT INTO products SET ?', product, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.put('/products/:id', (req, res) => {
  const product = req.body;
  db.query('UPDATE products SET ? WHERE id = ?', [product, req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.delete('/products/:id', (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});