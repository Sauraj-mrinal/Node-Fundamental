<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product List</title>
<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  table, th, td {
    border: 1px solid black;
  }
  th, td {
    padding: 8px;
    text-align: left;
  }
</style>
</head>
<body>

<h2>Product List</h2>

<table id="productTable">
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Action</th>
  </tr>
</table>

<script>
  // Sample data for demonstration
  const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  // Function to display products in the table
  function displayProducts() {
    const table = document.getElementById("productTable");

    products.forEach((product, index) => {
      const row = table.insertRow();
      const nameCell = row.insertCell(0);
      const priceCell = row.insertCell(1);
      const actionCell = row.insertCell(2);

      nameCell.innerHTML = product.name;
      priceCell.innerHTML = product.price;
      actionCell.innerHTML = `<button onclick="deleteProduct(${index})">Delete</button>`;
    });
  }

  // Function to delete product
  function deleteProduct(index) {
    products.splice(index, 1); // Remove the product from the array
    const table = document.getElementById("productTable");
    table.innerHTML = ""; // Clear the table
    displayProducts(); // Redisplay the products
  }

  // Display products when the page loads
  displayProducts();
</script>

</body>
</html>
