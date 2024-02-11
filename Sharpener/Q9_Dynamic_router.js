// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shopping_cart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Cart model
const Cart = mongoose.model('Cart', {
  user_id: String,
  product_id: String,
  quantity: Number,
});

// Route to add a product to the cart
app.post('/add-to-cart', async (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  try {
    // Check if the user's cart already contains the product
    let cart = await Cart.findOne({ user_id, product_id });

    if (cart) {
      // If the product is already in the cart, update the quantity
      cart.quantity += quantity;
    } else {
      // If the product is not in the cart, create a new entry
      cart = new Cart({ user_id, product_id, quantity });
    }

    // Save the cart entry
    await cart.save();

    res.status(201).send('Product added to cart successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
