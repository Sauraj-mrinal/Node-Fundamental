const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Set views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/contactus', (req, res) => res.render('contact_us'));
app.post('/success', (req, res) => {
  // Handle form submission (save data, etc.)
  res.redirect('/success');
});

// 404 Error handler
app.use((req, res, next) => {
  res.status(404).render('page_not_found');
});

// Start the server
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
