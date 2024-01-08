
// JSON stand for javaScript Object Notation
// JSON is a lightweight 
// format for storing snd trsnsporting data.
// JSON is often used when data is sent from a server to s web page 


//------------------------------------------------------------------------------------------------

const fs  = require('fs')
const biodata = {
    name : "vinod",
    age : 26,
    city: "chhatarpur"
}

console.log(biodata);
// output:->
// { name: 'vinod', age: 26, city: 'chhatarpur' }

// if u want to convert object into string format then 

const jsonData = JSON.stringify(biodata);
console.log(jsonData);

// output -> 
// {"name":"vinod","age":26,"city":"chhatarpur"}
//-----------------------------------------------------------------------------------

// so our task is 
//1) we have to convert object into json format
//2) then we have to add it into another file
//3) readfile 
//4) again convert back to js obj 
//5) then again you  have to print 

//-----------------------------------------------------------------------------------
//2) then we have to add it into another file

fs.writeFile("json1.json", jsonData, (err)=>{
  console.log("done ");
})
//3) readfile 
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
})

// output: - 
// {"name":"vinod","age":26,"city":"chhatarpur"}

// .. AGAIN CONVERT BACK INTO OBJECT (ORIGINAL DATA)

fs.readFile("json1.json","utf-8",(err,data)=>{
   const originalData = JSON.parse(data)
   console.log(data);
})
















