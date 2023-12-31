// challenge  

// 1: Create a folder with name Mrnal 
// 2: Create a file in it names bio.txt and into it.
// 3: Add more data without getting the buuffer data at first 
// 4: file encoding 
// 5: Rename the file name to mybio.text
// 6: now delere both the file and folders

//------------------------------------------------------------------------
const fs = require('fs');// import global module fs
//fs.mkdirSync('Mrinal')

//fs.writeFileSync('Mrinal/bio.txt', "My name is mrinal sauraj");

//const data  = fs.readFileSync("Mrinal/bio.txt");

//console.log(data);/// the output will be in form of buffer 
//{/* <Buffer 4d 79 20 6e 61 6d 65 20 69 73 20 6d 72 69 6e 61 6c 20 73 61 75 72 61 6a> */}

// we need to change it and make it so human can read it 
// 4: file encoding

fs.readFileSync('E:\Node\Node-Fundamental\CRUD Operations using FS Module\Mrinal','Mrinal/myBio.txt')

fs.unlinkSync('E:\Node\Node-Fundamental\CRUD Operations using FS Module\Mrinal\bio.txt');




