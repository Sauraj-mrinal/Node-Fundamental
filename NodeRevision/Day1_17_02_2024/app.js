// now we are going to create a server in node js 

// first we need to import core modules 
const http = require('http');

const server = http.createServer( (req,res)=>{
   console.log(req);
})

server.listen(port);