

// const EventEmitter = require('events’);


// on – When a listener is registered using the on() method, that listener is invoked every time the named event is emitted. 
// on() method is used to register listeners.
// Syntax:- on(eventName, callback)

// once - When a listener is registered using the once() 
// method, it is possible to register a listener that is called at most once for a particular event. 
// Once the event is emitted, the listener is unregistered and then called.
// Syntax:- once(eventName, callback)

// emit() – The emit() method allows an arbitrary set of arguments to be passed to the listener functions.
//  emit() method is used to trigger the event.
// Syntax:- emit(eventName, args)

const EventEmitter = require('events');

// i want to make an event and trigger it 

class MyClass extends EventEmitter{

}

// Creating Object 
const obj = new MyClass();

// // example 1 

// // register a  event listener 
// obj.on('event', ()=>{
//     console.log(" an event occurred ");
// })

// // Tigger event 
// obj.emit('event'); // an event occurred 


// example 2

// // register a  event listener 
// let m = 0;
// obj.on('event', ()=>{
//     console.log(++m);
// })

// // Tigger event 

// obj.emit('event'); //1
// obj.emit('event');//2
// obj.emit('event');//3


// once method 

// example 3

// register a  event listener 
let m = 0;
obj.once('event', ()=>{
    console.log(++m);
})

// Tigger event 

obj.emit('event'); 
obj.emit('event');
obj.emit('event');

// output -> 1 it will execute only one time 