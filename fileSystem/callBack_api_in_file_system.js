//---------------------------------------------------------------------
//                             callback API
//----------------------------------------------------------------


// The callback APIs perform all operations asynchronously,
// without blocking the event loop, then invoke a callback function upon completion or error.

//------------------------------------
// it have same methods as promiseAPI
//--------------------------------------

// mkdir() – Asynchronously creates a directory.
// Syntax:- mkdir(path[, options], callback)

// readdir() – Reads the contents of a directory.
// Syntax:- readdir(path[, options], callback)

// rmdir() – Removes the directory identified by path.
// Syntax:- rmdir(path[, options], callback)

// writeFile() – Asynchronously writes data to a file, replacing the file if it already exists. 
// Syntax:- writeFile(file, data[, options], callback)





// create folder 
const fs = require('fs');

// create folder  -> 'path should be there '
fs.mkdir("E:\\Node\\Node-Fundamental\\fileSystem\\file_created_by_mkdir", (error)=>{
    if(error) throw error;
    console.log("create folder");
})
// output --> create folder


// if we have not proper file then how can we create a folder

// reate Directory -> " path should not be there "

fs.mkdir("E:\\Node\\Node-Fundamental\\fileSystem\\file_created_by_mkdir2\\demo",{recursive: true}, (error)=>{
    if(error) throw error;
    console.log("create folder");
})


//---------------------------------------------------------------------------
// so how we can read file which is present inside any directory ir folder 
//----------------------------------------------------------------------------
// / readdir() – Reads the contents of a directory
// Syntax:- readdir(path[, options], callback)

fs.readdir("E:\\Node\\Node-Fundamental\\fileSystem\\file_created_by_mkdir",(error)=>{
    if(error) throw error;
    console.log(" read dir successfully"); 
  })

//   // output
// // read dir successfully

fs.readdir("E:\\Node\\Node-Fundamental\\fileSystem\\file_created_by_mkdir",(error , val)=>{
  if(error) throw error;
   for(const v of val){
    console.log(v);
   }
  console.log(" read dir successfully"); 
})

// output:->
    // read dir successfully
    // info.txt
    //  read dir successfully


    // create and write  write file :

    // write file
        try{
          fs.writeFile('E:\\Node\\Node-Fundamental\\fileSystem\\file_created_by_mkdir\\readme.txt',"hello world");

        }catch(error){
          console.log(error);
        }
 //read
    fs.readFile('readme.txt' , 'utf8', (error, data) => {
      if (error) throw error;
      console.log(data);
      })

// Append Data into File
fs.appendFile('readme.txt', 'GeekyShows', (error) => {
 if (error) throw error;
 console.log("Data Appended...");
});

// Copy File
fs.copyFile('readme.txt', 'info.txt', (error) => {
 if (error) throw error;
 console.log("File Copied...");
})

// Get File Information
fs.stat('c:\\nodejs\\ch7\\test\\emp.js', (error, stats) => {
 if (error) throw error;
 console.log(stats.isDirectory());
 console.log(stats.isFile());
 console.log(stats);
});














