// Objects
var obj = {name:"Lakshay",age:19,Address:"3718, Gurugram"}
console.log(obj)

// To print particular variable in object we write
console.log(obj.name);

// Function in NodeJs
// Isme bas function ka naam dena hota hai yeh anonymeous function hai 
// Iss function ka naam nahhi hota
var person = function(a,b){
    console.log("This is anonymeous function")
    console.log(a+b);
}
// To call this function write
// To pass arguements write like we write in other languages
person(3,10);


// Arrow Function 
// It is similar to anonymeous function 
var per1 = ()=> console.log("This is arrow function ");
per1();