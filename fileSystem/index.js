
//--------------------------------------------------------------------------
//                               FILE SYSTEM "fs" 
//--------------------------------------------------------------------------
//  Promise Based API
	
// so it is use to interact with files 

// to use fs module we have 3 ways 
//1) promise API----------------------

// 	• const fs = require('fs/promises’);
	
// 	• import * as fs from 'fs/promises';

// 2) Callback API---------------
	
// 	• const fs = require('fs’);
	
// 	• import * as fs from 'fs';

// 3) Sync API-----------------
	
// 	• const fs = require('fs’);
	
// 	• import * as fs from 'fs';


//--------------------------------------------------------------------------
  //                                    PROMISE API
//--------------------------------------------------------------------------
// The fs/promises API provides asynchronous file system methods that return promises.
// mkdir() – Asynchronously creates a directory.
// Syntax:- mkdir(path[, options])

// readdir() – Reads the contents of a directory.
// Syntax:- readdir(path[, options])

// rmdir() – Removes the directory identified by path.
// Syntax:- rmdir(path[, options])

// writeFile() – Asynchronously writes data to a file, replacing the file if it already exists. 
// Syntax:- writeFile(file, data[, options])

//-----------------------------let's see with example --------------------------------------------

// mkdir() – Asynchronously creates a directory.
// Syntax:- mkdir(path[, options])

//------------------------------------------------------------------------------------------------- 

// File System - Promise API
const fs = require('fs/promises');
// // Creating Directory - Path should be there
// try {
//   fs.mkdir('E:\\Node\\Node-Fundamental\\fileSystem\\newFileCreated');
//  console.log("Directory Created....");
// } catch (error) {
//  console.log(error);
// }


// output --> Directory Created....





// readdir() – Reads the contents of a directory.
// Syntax:- readdir(path[, options])
// try{
//   const val =  fs.readdir("E:\\Node\\Node-Fundamental\\fileSystem");
//   console.log(val); // Promise { <pending> } --> i dont know why is this ?

// }catch(error) {
//  console.log(error);
// }



// rmdir() – Removes the directory identified by path.
// Syntax:- rmdir(path[, options])

// try{
//     fs.rmdir("E:\\Node\\Node-Fundamental\\fileSystem\\newFileCreated")
//     console.log("directory deleted!!");
// }catch(error){
//     console.log(error);
// }
/// output -> directory deleted!!






// writeFile() – Asynchronously writes data to a file, replacing the file if it already exists. 
// Syntax:- writeFile(file, data[, options])

// Create and Write File
    try {
    fs.writeFile('readme.txt', 'Hello Node JS ');
    } catch (error) {
    console.log(error);
    }

// Read File
    try {
    const data =  fs.readFile('readme.txt');
    console.log(data);
    } catch (error) {
    console.log(error);
    }
// so it is working good!
///----------------------------------------------------------------------

// Append Data into File
// try {
//  await fs.appendFile('readme.txt', ' Hello GeekyShows');
// } catch (error) {
//  console.log(error);
// }

// Copy File
// try {
//  await fs.copyFile('readme.txt', 'c:\\nodejs\\ch6\\geek\\info.txt');
//  console.log("File Copied...");
// } catch (error) {
//  console.log(error);
// }

// Get File Information
// try {
//  const stats = await fs.stat('c:\\nodejs\\ch6\\test\\emp.js');
//  console.log(stats.isDirectory());
//  console.log(stats.isFile());
//  console.log(stats);
// } catch (error) {
//  console.log(error);
// }












