const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Create a MySQL connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Handle user login and store username in session
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  con.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password], (err, result) => {
    if (err) {
      console.log('Error:', err);
      res.status(500).send({ error: err });
    } else {
      if (result.length > 0) {
        req.session.username = username; // Store username in session
        res.send({ message: 'Logged in successfully' });
      } else {
        res.status(401).send({ message: 'Invalid credentials' });
      }
    }
  });
});

// Fetch user data based on session username
app.get('/fetch_user_data', (req, res) => {
  if (req.session.username) {
    const username = req.session.username;

    con.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
      if (err) {
        console.log('Error:', err);
        res.status(500).send({ error: err });
      } else {
        
        res.send({ user: result[0] });
      }
    });
  } else {
    res.status(401).send({ message: 'Not logged in' });
  }
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
