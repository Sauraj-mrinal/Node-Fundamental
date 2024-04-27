
// to import 
const path = require('path');
// now if we want to know 
// 1)basename 

console.log(path.basename("E:/Node\Node-Fundamental/Path_Module/index.js"));
// output--> index.js -> it will return last portion of this file path 


console.log(path.basename(__filename));
// index.js

console.log(path.basename(__filename  , ".js"));
//index -> it show only the file name 


// 2) dirname  -> it will return the directory name 
console.log(path.dirname("E:/Node\Node-Fundamental/Path_Module/index.js"));
// output-> E:/NodeNode-Fundamental/Path_Module



// 3) extansion name -> it will return the extension name 

console.log(path.extname);



//--------------------- join -> it is use to make a complite path //--------------------
console.log(path.join('/search','lable' , 'course/python' , 'oop'));

//output 
        // [Function: extname]
        // \search\lable\course\python\oop


//------------------------------------------------------------------------------------------------------------------------------
//         normalize() – The normalize() method normalizes the given path, resolving '..' and '.' segments. If the path is a zero-length string, '.' is returned, representing the current working directory.
// Syntax:- normalize(path)
// Example:- 
// normalize('C:\\temp\\\\foo\\bar\\..\\’);
// win32.normalize('C:////temp\\\\/\\/\\/foo/bar’);

//----------------------------------------------------------------------------------------------

console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

// output -->   C:\temp\foo\
//-------------------------------------------------------------------------------------------
// parse() – The parse() method returns an object whose properties represent significant elements of the path. Trailing directory separators are ignored.
// Syntax:- parse(path)
// Example:- parse('C:\\path\\dir\\file.txt');


console.log(path.parse('C:\\path\\dir\\file.txt'));


// output
// {
//     root: 'C:\\',
//     dir: 'C:\\path\\dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
//   }

//-----------------------------------------------------------------------------------------------------console.log(path.
// isAbsolute() –  The path.isAbsolute() method determines if path is an absolute path. If the given path is a zero-length string, false will be returned.
// Syntax:- isAbsolute(path)
// Example:- 

console.log(path.isAbsolute('//server'));    // true
console.log(path.isAbsolute('\\\\server'));  // true
console.log(path.isAbsolute('C:/foo/..'));   // true
console.log(path.isAbsolute('C:\\foo\\..')); // true
console.log(path.isAbsolute('bar\\baz'));    // false
console.log(path.isAbsolute('bar/baz'));     // false
console.log(path.isAbsolute('.'));           // false




