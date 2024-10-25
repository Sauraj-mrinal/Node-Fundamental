const { createExpense, getExpensesByUserId } = require('../models/expenseModel'); // Import expense model

// Add a new expense
// const { createExpense } = require('../models/expenseModel');

// Add a new expense
const addExpense = (req, res) => {
    const { userId, amount, description, category } = req.body;
    console.log(userId)

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    // Assuming `createExpense` is a function that saves expense data to the database
    createExpense(userId, amount, description, category, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add expense' });
        }
        res.status(201).json({ message: 'Expense added successfully' });
    });
};



// Fetch all expenses for a user
const getExpenses = (req, res) => {
    const userId = req.headers.authorization?.split(' ')[1]; // Get userId from authorization header

    // Validate userId
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required.' }); // Respond with an error if userId is missing
    }

    getExpensesByUserId(userId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' }); // Handle database error
        }

        res.status(200).json({ expenses: results }); // Respond with the list of expenses
    });
};

module.exports = { addExpense, getExpenses }; // Export the controller functions
