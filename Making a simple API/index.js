

// make a server
// create headers


// if we want to create a server , first we have to import 
// http module 

const http = require('http');// it help us to make apis 


// then we have to create a server --> we use createServer function that will take a function as a parameter and this 
// function will take two arguments reqest and response
http.createServer((req , res)=>{
   // now we have two operation 
   // 1 ) 
   res.writeHead(200 , {'Content-Type':'application/json'});// here 200 is a basic stander of APIs
   //body part 

   // we can make an object but this object shoud be in string form 
   // 
   res.write(JSON.stringify({name:'Mrinal',email:'Mrinal@gmail.com'}));

}).listen(3000)// .listen(_posrt number)
// now my server is successfully created

