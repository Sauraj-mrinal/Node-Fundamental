const http = require('http');

// clinte is requeasting for somthing like home pages and i have to 
// send or fullfil the request 

// what wver my client is sending it will come inside req 
const server  =  http.createServer((req, res) => {
    // here i can pass html data 

    // we are trying to send html data 

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> Mrinal sauraj</title> </head> ')
    res.write('<body> <h1>Mrinal sauraj</h1> </body> ')
    res.write('</html>');
})

server.listen(2000)