const http = require('http')
const port = 3000
const  express = require('express')
const app = express();

// here only we can write middleware 
// after express app calling and befor server call

// so "use () "->  is use to manage middleware
app.use((req, res,next)=>{
    console.log('In the first middleware function');
// to call or continue with second middleware 
// we write next();

next();
})
app.use((req, res, next)=>{
    console.log("this is second middleware function");
    res.send('<h1> hii my name is mrinal </h1>');
})

const server = http.createServer(app)
server.listen(port)


// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//------------------------------------------
// output
//------------------------------------------
// In the first middleware function
// this is second middleware function