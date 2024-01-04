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



// In Node.js, Modules are the blocks of encapsulated code that communicate with an external 
// application on the basis of their related functionality

// Modules are of three types:

// Core Modules
// local Modules
// Third-party Modules

//----------------------------------------------------------------

// Syntax:

// const module = require('module_name');

//----------------------------------------------------------------



// Core Modules	                       Description

// 1)http	                   creates an HTTP server in Node.js.

// 2)assert	                   set of assertion functions useful for testing.

// 3)fs	                        used to handle file system.

// 4) path	                    includes methods to deal with file paths

// 5) process	                provides information and control about the current Node.js process.

// 6) os	                    provides information about the operating system.

// 7)querystring	            utility used for parsing and formatting URL query strings.

// 8)url	                     module provides utilities for URL resolution and parsing.




