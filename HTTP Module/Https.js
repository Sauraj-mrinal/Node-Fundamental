
// The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. 
// const http = require(‘http’);
// import http from ‘http’;
// createServer([options][, requestListener]) – Returns a new instance of http.Server.

const http = require('http');

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');


// way 2 
 const server = http.createServer(function (req, res) {

    res.end('Hello World');
 }) 
 server.listen(8000 , "127.0.0.1",()=>{
    console.log();('Server running at http://127.0.0.1:')
 });


// --------------------------some properties --------------------------------
//  http Module Properties
import http from 'http';

const server = http.createServer((req, res) => {
//  Request
 console.log(req.url);
 if (req.url != '/favicon.ico') {
  console.log(req.url);
 }
 // if you want to know the methond of the request 
 console.log(req.method);

 // Response
 // when i send the request it show the status code 200 default if you want to set as per your mood then you can do 
 // like 
 res.statusCode = 202;
 res.statusMessage = "Good";
 res.setHeader('Content-Type', 'text/plain');
 res.writeHead(202, "Good", { 'Content-Type': 'text/plain' });
 res.end('Response from Server');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
 console.log('Server Running at http://localhost:8000');
});






