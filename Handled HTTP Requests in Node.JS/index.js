
const http = require('http');
// in tis case we work with url
console.log("hii");
const server = http.createServer(function (req, res) {
    console.log(req.url);// it help us to see what actuall my user is typing or searching into the url
    // with the help of this we can findout : what is happening inside 
    // ex - > http://localhost:8000--> after if u write something like "http://localhost:8000/about 
    // then this msg will shown up to your terminal

    //--------------------------------------------------------------------------------------------------------
    // let's see how we can do routing
    //--------------------------------------------------------------------------------------------------------
    // here we are recieving the http request and we have to handle the request


    //so we use here if condition --> 
    if(req.url = "/")//--> agar user simple ye de rha hai mujhe tab ham kya krenge 
    {
        res.end('hello it is home page');

    }else if(req.url = "/about"){//-> / for second kind of request by user -> agar user aaisa website type krta hai tb ham usko kaise response krenge 

        res.end('hello it is About page');
        
    }else if(req.url = "/contactUs"){
        res.end('hello it is About page');
        
    }else{
        res.writeHead(404)
        res.end("404 error pages . page doesn't exist");
    }

 }) ;
 server.listen(8000 , "127.0.0.1",()=>{
    console.log();('Server running at http://127.0.0.1:')
 });
