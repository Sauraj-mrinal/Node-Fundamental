//what is global and waht is non global
// we does not require to import it brfore use 
// for example
console.log('hii it is very important and basic thing ');
// here we are using console--> which is global --> before using console we doesnt require anything
// we are just using the console

// now we want to use any file system the we have to import it 
// bcz it is not a global 
//
// now we are creating a new file
const fs = require('fs');
fs.writeFileSync('hello.txt','hii my name is golu gupta from ....')

// to find the drectory we need to use 
console.log(__dirname);// E:\Node\Node-Fundamental\core_Module_fundamentals














