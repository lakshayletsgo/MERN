// Create and Trigger a custom event
// Isme hamne pehle event ko import karwaya then we created an object of event then we set when it will be on 
// If we emit 'click' then the event will be triggered and the function will run
// We can pass value in it like in normal function 
const event  = require("events");
const events = new event.EventEmitter();

// events.on('click',()=>{
//     console.log("Event Triggered Successfully");
// })
// events.emit('click');
// Output
// Event Triggered Successfully


events.on('click',(a,b)=>{
    console.log("Event Triggered Successfully");
    console.log(a+b);
})
events.emit('click',19,120);
// Output
// Event Triggered Successfully
// 139
