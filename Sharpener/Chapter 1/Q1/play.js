// in this section we will se the basic of javaScript 
var nam = 'Max'
var age  = 29;
var hasHobbies = true ;

function summarizeUser(userName, userAge, hasHobbies) {
   
    // return somthing
     return 'userName '+ userName + ' userAger' + userAge + 'user Hobbies ' + hasHobbies;
     
}

console.log(summarizeUser('Mrinal',25,'sleep'));

// using let in place of var
// let nam = 'Max'
// let age  = 29;
// let hasHobbies = true ;

// const -> we can't change there value after declaration

// Anonymous Functions
// // -> when i declare a function and store it inside a variable then whenever we need it we can call it and it is known as a anonymous function
// const displayDetails = function (userName, userAge, hasHobbies) {

//     return 'userName '+ userName + ' userAge ' + userAge + ' hasHobbies ' + hasHobbies;

// }
 
// calling 
// displayDetails(userName, userAge, hasHobbies)



// so now what arrow functions 
//--> when we remove the function and in place of function we write arror it is now an arrow function 

// const displayDetails1 = (userName, userAge, hasHobbies)=> {

//     return 'userName '+ userName + ' userAge ' + userAge + ' hasHobbies ' + hasHobbies;

// }

// Arrays -->
// in the case of array what happend 
// we can decelear an array like ->

const hobbies  = ['sports' , 'Cooking '];

// to iterate over the array we need to use loop 
for (let hobby of hobbies){
    console.log(hobby);
}

// Map method 
// whenever we use map method it return a copy of an array 
// it will not change naything into the new method 
// change will be applied to the copy array only 


// here i want to add one object into the array using Map function 

console.log(hobbies.map(hobby => 'hobby :' + hobby
));

console.log('---------------------------------');
console.log(hobbies);

// and there are many more function in array 


// what is Async code 
set

