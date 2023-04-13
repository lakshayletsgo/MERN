// Prototype in NodeJs
// Protoype is similar to extends in Java 
// If we have to addd more functions or variables in a already defined classes then we use prototype
var employee = function(){
    this.name = "Lakshay";
    this.age = 19;
    this.address = "3718 Sector 23A Gurugram";
}

employee.prototype={
    EmailID:"Lakshay22csu100@ncuindia.edu",
    getName:function(){
        return this.name;
    }
}
console.log(employee());
var E1 = new employee();
console.log(E1.EmailID);
console.log(E1.getName());


// Output
// undefined
// Lakshay22csu100@ncuindia.edu
// Lakshay