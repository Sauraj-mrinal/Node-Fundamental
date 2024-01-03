const { log } = require('console');
const fs = require('fs')

// i need to cerate a file 

// fs.writeFile("read.txt", "today is awesome day 31_12_2023",(err)=>{


//     console.log("file is created");
//     console.log(err);
// })

// we pass them a function as a argument - a callback - that get  called
// when task is finished.
// the callback  has a argument that tell you whather the operation compleres successfully.

// now we need a say what to do when fs.writeFile 
// has completed (even if it's nothing ),and start chacking for error




//--------------------------------------------------------------------------------------------------
// if we want to add more data then
fs.appendFile('read.txt', 'everyone is celebriting new year party  drinking enjoying but i am trying to learn something node ... god ...........', (err)=>{
    console.log("task completed");
})


// now i want to read the file 
fs.readFile('read.txt','UTF-8', (err,data)=>{
   console.log(data);

})