const db = require('../database'); // Adjust the path based on your structure

// Function to create a new expense in the database
const createExpense = (userId, amount, description, category, callback) => {
    const query = 'INSERT INTO expenses1 ( amount, description, category) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, amount, description, category], (err, results) => {
        callback(err, results);
    });
};

module.exports = { createExpense };

// const db = require('../database'); // Import database connection

// // Function to create a new expense
// const createExpense = (userId, amount, description, category, callback) => {
//     const query = 'INSERT INTO expenses (userId, amount, description, category) VALUES (?, ?, ?, ?)';
//     db.query(query, [userId, amount, description, category], callback); // Use callback to handle the response
// };

// // Function to get all expenses by user ID
// const getExpensesByUserId = (userId, callback) => {
//     const query = 'SELECT * FROM expenses WHERE userId = ?';
//     db.query(query, [userId], callback); // Use callback to handle the response
// };

// module.exports = { createExpense, getExpensesByUserId };
