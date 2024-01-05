// const add = require("./index");// it is onlly work with single function or u can say single optr


// console.log(add(2,4));

//----------------------------------------------------------------
// now come to way number 2
// let think if you have more then one method to import and more then one method to export 
//  in this case whne ever we require the js file if will return a object 
// and each method will be the value of the object 

// so using dot we can access itn
//-----------------------------------------------------------------------------------------------------


// lets see

//
const opt_obj = require("./index");

console.log(opt_obj.add(2,4));
console.log(opt_obj.sub(8,2));
console.log(opt_obj.mul(2,4));

// output
// 6
// 6
// 8

// we have already seen objecr dsturacturing 

// so if opt_obj is a object the in place of opt_obj we can write 

const {add,sub, mul} = require("./index");

console.log(add(22,4));//26 

// it is a easy process 



