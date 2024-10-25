const { findUserByEmail, createUser } = require('../models/userModel');

// Signup controller function
const signup = (req, res) => {
    // Receive name, email, and password from the request body
    const { name, email, password } = req.body; 

    // Check if the user already exists
    findUserByEmail(email, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' }); // Internal server error
        }

        // If user already exists, respond with a 400 error
        if (results.length > 0) {
            return res.status(400).json({ error: 'User already exists' }); // User already exists
        }

        // Create a new user
        createUser(name, email, password, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to register user' }); // Registration failure
            }

            // Respond with a success message
            res.status(201).json({ message: 'User registered successfully' }); // Success message
        });
    });
};

// Login controller function
// const login = (req, res) => {
//     // Receive email and password from the request body
//     const { email, password } = req.body; 

//     // Check if the user exists by email
//     findUserByEmail(email, (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Database error' }); // Internal server error
//         }

//         // If user does not exist, respond with a 404 error
//         if (results.length === 0) {
//             return res.status(404).json({ error: 'User not found' }); // User not found
//         }

//         const user = results[0]; // Get the first user from the results

//         // Check if the password matches (You should use a hashing function in production)
//         if (user.password !== password) {
//             return res.status(401).json({ error: 'User not authorized' }); // Unauthorized access
//         }

//         // Successful login
//         res.status(200).json({ message: 'User login successful' }); // Send success message
//     });
// };
const login = (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists by email
    findUserByEmail(email, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        // If user does not exist, respond with a 404 error
        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = results[0];

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ error: 'User not authorized' });
        }

        // Successful login - Send userId in response
        res.status(200).json({
            success: true,
            userId: user.id, // Send user ID
            message: 'Login successful'
        });
    });
};
// Export both signup and login functions
module.exports = { signup, login }; 



