// ECMA Script 
// let, const, templating string, class

// var and let are almost same bas var me ham jitni baar bhi redefine kar skte hai aur let me ek baar define kar diya toh poore script me vahi rahega
// const me value change nahi kar skte hai
// Agr const ki value change karni hai toh uska ek object bana ke uske andar ki value change kar skte hai 

let a = 20;
function xyz(){
    let a = 40;
    console.log(a);
}
console.log(a);
xyz();


const abc = {
    name:"Lakshay",
    age:19,
}
console.log(abc);
abc.name = "Lakshay2";
abc.Address = "49A Virat Nagar";
console.log(abc);

// Template String 
// ${} ==> yeh template string hai 
var name ="Lakshay";
var age = 10;
console.log(`This is an example of template string of name ${name} and age is ${age}`);


// Classes
// Classes is similar to java  classes bas isme alag se variable declare nahi karne hote 
// Isme ham bina variables bana ke bhi constructors aur methods pass kar skte hai 
// Ek class me ek hi constructor ho skte hai 
// Ek se jada constructor allowed nahi hai js me  
class person{
    // constructor(){
    //     this.name = "Lakshay4";
    //     this.age =20;
    // }
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        // Isme agr hame email id chahiye toh yeh wala function run karna hi hoga uske baad hi emailId ko use kar skte hai 
        this.emailID = "Lakshay22csu100@ncuindia.edu";
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getID(){
        return this.emailID;
    }
}
var person1  =new person();
console.log(person1.getID());
console.log(person1.getName());
console.log(person1.getID());

var person2  = new person("lakshay",10);
console.log(person2.getName());


// OUTPUT
// 20
// 40
// { name: 'Lakshay', age: 19 }
// { name: 'Lakshay2', age: 19, Address: '49A Virat Nagar' }
// This is an example of template string of name Lakshay and age is 10
// undefined
// undefined
// Lakshay22csu100@ncuindia.edu
// lakshay