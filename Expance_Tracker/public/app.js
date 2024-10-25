// app.js

// Function to handle signup form submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                signupForm.reset();
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert('Something went wrong. Please try again.');
        }
    });
}

// Function to handle login form submission


document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            
            localStorage.setItem('userId', data.id); // Store userId in localStorage
            alert(data.message);
            window.location.href = '/expenses.html'; // Redirect to the expenses page
        } else {
            alert(data.error);
        }
    } catch (error) {
        alert('Login failed. Please try again.');
    }
});






// Function to handle expense form submission
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenses');

// Form submission logic to add a new expense
expenseForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userId = localStorage.getItem('userId'); // Get userId from localStorage
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    try {
        const response = await fetch('/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, amount, description, category }), // Include userId in the request
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message); // Success message
            expenseForm.reset();
            fetchExpenses(); // Refresh the expense list after adding
        } else {
            alert(data.error); // Error message
        }
    } catch (error) {
        alert('Something went wrong. Please try again.');
    }
});



// Function to fetch and display expenses from the backend
async function fetchExpenses() {
    const userId = localStorage.getItem('userId'); // Retrieve the user ID
     
    if (!userId) {
        alert('User ID is required Please log in again.');
        return;
    }

    try {
        const response = await fetch('/api/expenses', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }), // Include userId here
        });

        const data = await response.json();

        if (response.ok) {
            // Clear the list before appending new data
            expenseList.innerHTML = '';

            // Loop through the expenses and display them
            data.expenses.forEach(expense => {
                const listItem = document.createElement('li');
                listItem.textContent = `Amount: ${expense.amount}, Description: ${expense.description}, Category: ${expense.category}`;
                expenseList.appendChild(listItem);
            });
        } else {
            alert(data.error); // Handle backend error
        }
    } catch (error) {
        alert('Failed to fetch expenses.');
    }
}

// Fetch the expenses when the page loads
window.onload = fetchExpenses;