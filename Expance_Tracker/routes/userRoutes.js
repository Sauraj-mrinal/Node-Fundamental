const express = require('express'); // Import express
const { signup, login } = require('../controllers/userController'); // Import signup and login functions from userController
const { addExpense, getExpenses } = require('../controllers/expenseController'); // Import addExpense and getExpenses from expenseController
const router = express.Router(); // Create a new router instance

// API route for user signup
router.post('/signup', signup); // When a POST request is made to /api/signup, invoke the signup function

// API route for user login
router.post('/login', login); // When a POST request is made to /api/login, invoke the login function

// API route for adding a new expense
router.post('/expenses', addExpense); // When a POST request is made to /api/expenses, invoke the addExpense function

// API route for fetching all expenses for a user
router.get('/expenses', getExpenses); // When a GET request is made to /api/expenses, invoke the getExpenses function

// Export the router to use in other parts of the application
module.exports = router;
