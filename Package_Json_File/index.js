//-------------------------------------------
//              file content
//-------------------------------------------

// what is package json : 

//- it give us the details about my project /(all information about ->  version/diff-diff package/ version )
// it hold all information which is related to coding 

// how to make it
// check the file in details 

// install external package 

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

console.log("Package.json");

// how to make it

// type -> npm -> init -> enter


var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass




var colors = require('colors/safe');
 
console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass





