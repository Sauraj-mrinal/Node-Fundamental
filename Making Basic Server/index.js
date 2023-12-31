                        //-------------------------------
                        //   content in file
                        //-------------------------------

// basic server
// function as a parameter in node 
// arrow Function
// get outputfrom browser
// interview Question

// basic server making 

// as we no that if you want to create a server you have to require 
const http = require('http') // http ->the way to requre
// so what is the work of http server -->
// http modules -> it is use to handle requests and responses 
// node js ke andar server ke response and request ko handle krta hai.

// http.createServer()//it will take a function as a parameter and listen 
 http.createServer((req, res)=>{
    res.write('Mrinal Sauraj');
    res.end();
}).listen(4000)// port number
// or 
// http.createServer(fun).listen(4200)
// let fun = function(request, response){
//     response.write(" hello this is mrinal")
//     response.end();
// }
Node.js can handle a large number of concurrent requests due to its event-driven,
 non-blocking nature. Several factors contribute to its scalability:

Asynchronous I/O:

Node.js can efficiently handle a large number of requests simultaneously without waiting for each operation to complete.
Event-Driven Architecture:

The event loop efficiently manages and distributes tasks, allowing Node.js to handle multiple connections concurrently.
Single Thread with Event Loop:

While Node.js runs in a single thread, it offloads I/O-bound tasks to the operating system, preventing blocking and allowing the server to handle other requests.
Scalability with Clustering:

Node.js applications can be scaled horizontally by using clustering. Multiple Node.js processes can run in parallel, each handling a portion of the incoming requests.

process.exit is used to terminate a Node.js application. It takes an exit code as an argument. A code of 0 indicates successful termination, 
while any other code indicates an error or abnormal termination.


req.url: Contains the URL string of the incoming HTTP request.
req.headers: Contains the headers of the incoming HTTP request.
req.method: Contains the HTTP method (GET, POST, PUT, DELETE, etc.) of the incoming request.



















