// errorController.js


// Create a controllers folder:

// In your project structure, add a folder named controllers.
// Create a controller for 404 errors:

// Inside the controllers folder, create a file named errorController.js.
// Implement the logic to handle 404 errors and render an error page.


const express = require('express');


const router = express.Router();

router.use((req, res) => {
    res.status(404).render('page_not_found');
});

module.exports = router;

//-
// update 
// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Other imports...

// Set views folder and view engine...

// Use controllers
const errorController = require('./controllers/errorController');
app.use(errorController);

// Other routes...

// Start the server...


// Create a controller for /contactus and /success routes:

// Add a new file in the controllers folder named formController.js.
// Implement the logic for handling the contact form and success page

// formController.js
const express = require('express');
const router = express.Router();

router.get('/contactus', (req, res) => {
    res.render('contact_us');
});

router.post('/success', (req, res) => {
    // Handle form submission (save data, etc.)
    res.redirect('/success');
});

module.exports = router;

// Update your existing app.js to use the form controller:

// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Other imports...

// Set views folder and view engine...

// Use controllers
const errorController = require('./controllers/errorController');
const formController = require('./controllers/formController');
app.use(errorController);
app.use(formController);

// Other routes...

// Start the server...
