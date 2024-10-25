const http = require("http");

// // creating server 
// const server = http.createServer((request, response)=>{
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("hello from server ")
// })

// server.listen(8000, '127.0.0.1',()=>{
//     console.log("server is running ");
    
// })

// readint html content and return it as a response
 const fs = require('fs');
 const readline = require('readline');

 // first i want to read my html file here then use 
const html = fs.readFileSync('./Temp/index.html' , "utf-8")
const server = http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/plain"});
    
    response.end(html)
})

server.listen(8000, '127.0.0.1',()=>{
    console.log("server is running ");
    
})