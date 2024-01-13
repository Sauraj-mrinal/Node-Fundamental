const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
 if(req.url == "/"){
    res.end("this is home page ")
 }else if(req.url =="/about"){
    res.end("this is about file");
 }else if(req.url = "/userApi"){
    //res.end("this is use API PAGE")


    fs.readFile(`${__dirname}/Making a simple API/API.json `, 
    "utf-8",(error, data) =>{
        console.log(data);
    });
    res.end(data)
    // E:\Node\Node-Fundamental\
 }else{
    res.writeHead(404 , {"Content -type": "text/html"});
    res.end("<h2>404 Not Found this page does not exist</h2>")
 }
});

server.listen(8000 , "127.0.0.1" , ()=>{
   console.log(" sever started ");
})


