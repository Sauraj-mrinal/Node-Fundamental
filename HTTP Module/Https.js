

const http = require('http');

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');


 const server = http.createServer(function (req, res) {

    res.end('Hello World');
 }) 
 server.listen(8000 , "127.0.0.1",()=>{
    console.log();('Server running at http://127.0.0.1:')
 });









