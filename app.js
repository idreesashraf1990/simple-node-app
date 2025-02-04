const express = require('express');
const app = express();
const path = require('path');

// Static files serve kar rahe hain (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About page route
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Contact page route
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Server ko listen karwana
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
