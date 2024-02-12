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

// Define the Product model
const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
});

// Route to delete a product by ID
app.delete('/delete/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID and delete it
    await Product.deleteOne({ _id: productId });

    res.status(200).send('Product deleted successfully');
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
