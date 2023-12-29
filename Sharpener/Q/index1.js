const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Read existing messages from the file
    fs.readFile('formData.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        data = ''; // Set data to an empty string if there's an error reading the file
      }

      // Serve the HTML form with existing messages
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <div>
          <h2>Existing Messages:</h2>
          <pre>${data}</pre>
        </div>
        <form method="post" action="/submit">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" required>
          <br>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" required>
          <br>
          <button type="submit">Submit</button>
        </form>
      `);
    });
  } else if (req.method === 'POST' && req.url === '/submit') {
    // Handle form submission on a POST request
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      // Parse the form data
      const formData = new URLSearchParams(body);
      const name = formData.get('name');
      const email = formData.get('email');

      // Write the form data to a file
      const data = `Name: ${name}, Email: ${email}\n`;
      fs.appendFile('formData.txt', data, (err) => {
        if (err) throw err;
        console.log('Form data written to formData.txt');
        
        // Redirect the user with a 302 response
        res.writeHead(302, { 'Location': '/' });
        res.end();
      });
    });
  } else {
    // Handle other requests with a 404 response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
