const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const fetchRouter = require('./controllers/userController')
// const expenseRoutes = require('./routes/expenseRoutes');
const app = express();
const PORT = 8500;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', userRoutes); // User routes (e.g., signup, login)
// app.use('/api',expenseRoutes)
// Serve HTML pages for signup and login
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});
// app.get('/home',userRoutes);
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/expanse',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'expenses.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
