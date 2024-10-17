// The synchronous APIs perform all operations synchronously, 
//blocking the event loop until the operation completes or fails.

//----------------------------------------------------------------
//                   we have some method 
//----------------------------------------------------------------



// mkdirSync() – Synchronously creates a directory.
// Syntax:- mkdirSync(path[, options])

// readdirSync() – Reads the contents of a directory.
// Syntax:- readdirSync(path[, options])

// rmdirSync() – Removes the directory identified by path.
// Syntax:- rmdirSync(path[, options])

// writeFileSync() – Synchronously writes data to a file, replacing the file if it already exists. 
// Syntax:- writeFileSync(file, data[, options])

 const fs  = require('fs');

               //create Directory
 fs.mkdirSync('E:\\Node\\Node-Fundamental\\fileSystem\\GEEKS_FOR_GEEKS');
 // o/p - i can see one new folder is created 

         // create Directory  - path is not required to be there 
// fs.mkdirSync('E:\\Node\\Node-Fundamental\\fileSystem\\GEEKS_FOR_GEEKS2\\demo' , {recursive: true});



               // read content of Directory
const file = fs.readFileSync('E:\\Node\\Node-Fundamental\\fileSystem\\GEEKS_FOR_GEEKS2\\demo\\r.txt', 'utf8');
console.log(file);
// OUTPUT ->  nhvsanudiacK

                // Read File
const data = fs.readFileSync('readme.txt');
console.log(data);
// IT give us buffer data

const data = fs.readFileSync('readme.txt', 'utf-8');
console.log(data);

// Append Data into File
fs.appendFileSync('readme.txt', 'GeekyShows');

// Copy File
fs.copyFileSync('readme.txt', 'info.txt');

// Get File Information -> it will give us objects 
const stats = fs.statSync('c:\\nodejs\\ch8\\test\\emp.js');
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats);






































































