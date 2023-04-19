// Mongoose introduction 
// In this to store data we need to create a schema 
// After we create the schema we have to create the model of that schema 
// After creating the model we make an object of the model then we store the value in it in json format
// To print the data we can create the method of it outside the schema and we can then call it 
const { default: mongoose } = require('mongoose');
var Mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    name:String,
    age:Number,
})
employeeSchema.methods.nameOfEmployee = function(){
    // console.log("Name of the person is "+this.name);
    console.log("%s is the name of the employee",this.name);
}

var employeeModel = mongoose.model('Employee',employeeSchema);
var Employee = new employeeModel({name:"Lakshay",age:19});
// console.log(Employee);
// Output
// {
//     name: 'Lakshay',
//     age: 19,
//     _id: new ObjectId("643fe6072d355da3d25eda15")
//   }


Employee.nameOfEmployee();
