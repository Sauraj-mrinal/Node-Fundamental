//child process module is node module which is used to create sub process 
// inside the script 

// so what is sub process --> let we have a js code which is already a script
// but i want to do something more work or something more process 

// open CMD and - > calc -> it will open my calculator 

const cp = require('child_process');
// the same command we can rune using this line 
// one process is child process and we can do some external processing

// we are trying to open my calculator with child process
// console.log(" we are trying to open my calculator with child process");
// cp.execSync('calc')
// console.log("calulator open  successfully");

// 
//  let output = cp.execSync("node test.js")// this command will use to opne node file 
//  let op = cp.execSync("node test.js")// this command will
console.log("output"+ cp.execSync("node test.js"));

