// now we are going to create a server in node js 

// first we need to import core modules 
let port =3000;
const http = require('http');

// what ever my client is sending it come inside my req 
const server = http.createServer( (req,res)=>{
   console.log(req);
})

server.listen(port);