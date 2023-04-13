// Nested events
// This is simple
// In this we just emit another event message in earlier event function 
const events = require("events");
const event = new events.EventEmitter();
const first_event = function(){
    console.log("This is first event");
    event.emit('click2');
}
const second_event = function(){
    console.log("This is second event");
    event.emit('click3');
}
const third_event = function(){
    console.log("This is third event");
}

event.on('click',first_event);
event.on('click2',second_event);
event.on('click3',third_event);
event.emit('click');