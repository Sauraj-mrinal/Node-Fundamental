const express = require('express');
const { signup, login  } = require('../controllers/userController');
const {fetchData} = require('../controllers/expenseController')
const {fetchDataById} = require('../controllers/expenseController')
const {deleteExpanseById} = require('../controllers/expenseController')

const router = express.Router();

const {addExpense} = require('../controllers/expenseController')
// const fetchData = require('../controllers/expenseController')
router.get('/expanse/fetch', fetchData);
router.post('/expanse/', addExpense)
router.get('/expanse/:id',fetchDataById)
router.delete('/expanse/:id',deleteExpanseById)

// Signup route
router.post('/signup', signup);
// router.get('/home',home)
// Login route
router.post('/login', login);
module.exports = router;
