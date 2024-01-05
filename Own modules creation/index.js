// const add = ((a,b)=>{
// return a+b;

// })

// const name  = " Mrinal";
// module.exports =add; 

// if we work with multiple functions then we have to write like
const add = ((a,b)=>{
    return a+b;
    
    })

    const sub = ((a,b)=>{
        return a-b;
        
        })

        const mul = ((a,b)=>{
            return a*b;
            

        })
// we have to write like this
module.exports.add=add; 
module.exports.sub=sub; 
module.exports.mul=mul; 


// we can export different ways

module.exports = {add,sub, mul}