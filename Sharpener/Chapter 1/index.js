const http = require('http');

const server = http.createServer((req, res) => {
  // Get the URL from the request object
  const url = req.url;

  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Custom responses based on the URL
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project');
  } else {
    res.end('404 Not Found'); // Default response for unknown URLs
  }
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});