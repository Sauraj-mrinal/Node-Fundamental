// const db = require('../database');

// // Check if user exists by email
// const findUserByEmail = (email, callback) => {
//     const query = 'SELECT * FROM users WHERE email = ?';
//     db.query(query, [email], callback);
// };

// // Insert new user into the database
// const createUser = (name, email, password, callback) => {
//     const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//     db.query(query, [name, email, password], callback);
// };

// module.exports = { findUserByEmail, createUser };

const db = require('../database');

// Check if user exists by email
const findUserByEmail = (email, callback) => {
    const query = 'SELECT id, email, password FROM users WHERE email = ?';
    db.query(query, [email], callback);
};

// Insert new user into the database
const createUser = (name, email, password, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], callback);
};

module.exports = { findUserByEmail, createUser };
