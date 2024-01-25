const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.queastion("please enter your name " , (name)=>{
    console.log("you entered your name  -> "+ name);
    r1.close();
})

rl.on('close', ()=>{
    console.log("interface closed");
    process.exit(0);
})