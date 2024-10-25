const express = require('express'); // Import express
const userRoutes = require('./routes/userRoutes'); // Import the user routes
const expenseRoutes = require('./routes/expenseRoutes');
const path = require('path'); // Import path module
const app = express(); // Create an express application
const PORT = 8000; // Define the port

// Middleware to parse JSON data
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Use the user routes for API calls
app.use('/api', userRoutes); // Ensure this line exists
app.use('/api', expenseRoutes); // Expense API routes


// Route to serve expenses.html after successful login
app.get('/expenses.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'expenses.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Log the server start
});





