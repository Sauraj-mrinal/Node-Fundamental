
// The os module provides operating system-related utility methods and properties.
// const os = require('os’);


// platform() – Returns a string identifying the operating system platform. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'.

// arch() – Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64’.

// cpus() – Returns an array of objects containing information about each logical CPU core.

// hostname() – Returns the host name of the operating system as a string.


// homedir() – Returns the string path of the current user's home directory.

// networkInterfaces() - Returns an object containing network interfaces that have been assigned a network address.

// freemem() – Returns the amount of free system memory in bytes as an integer.

// totalmem() – Returns the total amount of system memory in bytes as an integer.

// import os module we can write like 

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
