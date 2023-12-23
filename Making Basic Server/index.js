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
    res.write('Hello');
    res.end();
}).listen(3000)// port number
// or 
// http.createServer(fun).listen(4200)
// let fun = function(request, response){
//     response.write(" hello this is mrinal")
//     response.end();
// }



















