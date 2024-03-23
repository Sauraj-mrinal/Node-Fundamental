//--------------------------------------------------------------------------------------

   // task


                    //   we will create input box here and in side 
                    //   we will take input and 
                    //   also we have to create a submit button 

                    //   whenever user try to submit the data we catch the data into the request body 










//------------------------------------------------------------------------------------



const http = require('http');

// clinte is requeasting for somthing like home pages and i have to 
// send or fullfil the request 

// what wver my client is sending it will come inside req 
const server  =  http.createServer((req, res) => {
    
    // for home page 
    if(req.url === '/'){
        return setHomePage(req, res);
    }
    
    if (req.url === '/username' && req.method.toLowerCase() === 'post'){
        return submitUsername(req, res);
    }


    
});

function submitUsername(req,res){
    res.setHeader('Content-Type', 'text/html');
    return res.end(`<div> Mrinal webPage </div>`);

}

function setHomePage(req, res){
    res.setHeader('Content-Type', 'text/html');
    // create an input box 

    return res.end(`
        <!doctype html>

        <htm>
            <head>
             <title> Leela Web Dev </title>

             </head>


             <body>
             <form>

             <form action ="/userName" type = "post">

                <div>
                 <input type="text" name = "username" placeholder = "Username"  />
                </div>

                <div>

                <input type = "submit" value = "send" />
                </div>

                </form>

             </body>

        </html>
    `);
}

server.listen(2000)
