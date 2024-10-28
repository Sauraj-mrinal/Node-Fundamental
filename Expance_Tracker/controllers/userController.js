// In userController.js
const db = require('../database'); // Import your database connection


// const home = (req,res)=>{
//     res.send("hii i am home ")
// }
// Signup function
const signup = (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Insert new user
        db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to create user' });
            }
            return res.status(201).json({ message: 'User created successfully' });
        });
    });
};

// Login function
const login = (req, res) => {
    const { email, password } = req.body;

    // Authenticate user
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', user: results[0] });
    });
};

module.exports = { signup, login  };
