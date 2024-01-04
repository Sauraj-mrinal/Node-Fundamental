const os = require('os');
console.log(os.arch());
// output -x64

// free memory
const freeMemory = os.freeMemory
console.log(freeMemory);

console.log(os.platform());// it shows system platform
// output - win32

console.log(os.networkInterfaces());
// output-->
//network infomation[object Object]
//'Wi-Fi': [
    // {
    //     address: '2409:40f2:12f:8676:137a:d219:87cc:6092',    
    //     netmask: 'ffff:ffff:ffff:ffff::',
    //     family: 'IPv6',
    //     mac: '94:e7:0b:8e:5d:dc',
    //     internal: false,
    //     cidr: '2409:40f2:12f:8676:137a:d219:87cc:6092/64',    
    //     scopeid: 0
    //   },

 // 
    //----------------------------------------------------------------
    console.log(os.cpus());
//    ..output
    //{
//     model: 'Intel(R) Core(TM) i5-9300H CPU @ 2.40GHz',      
//     speed: 2400,
//     times: {
//       user: 3302531,
//       nice: 0,
//       sys: 1469109,
//       idle: 126682218,
//       irq: 29640
//     }
//   }


//E:\Node\Node-Fundamental\Os Module\os.js
