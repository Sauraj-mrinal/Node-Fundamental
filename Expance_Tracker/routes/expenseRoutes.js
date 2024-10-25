const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const router = express.Router();

// API route to add an expense
router.post('/', addExpense); // POST request to /api/expenses

// API route to get expenses
router.get('/', getExpenses); // GET request to /api/expenses

module.exports = router;


