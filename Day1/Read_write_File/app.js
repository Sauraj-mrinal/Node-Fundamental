

const fs = require('fs')// it will return the object of file system
// reading and writing 

let textIn = fs.readFileSync('./newFile/input.txt','utf8')// readFileSync -> is use to read the file content 

console.log(textIn);

// write file 
let content  = `Data read from input.txt ${textIn} \nDate created ${new Date()}`
fs.writeFileSync('./newFile/input.txt' , content )
console.log(textIn);