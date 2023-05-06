// Adding data to database using mongoose
const mongoose = require('mongoose'); //Requiring mongoose 
var conn = mongoose.connection; //This is for further use of mongoose.connection 
mongoose.connect('mongodb://127.0.0.1:27017/Employee'); //In this we enter the local host and the name of the database we want to store the data in 

// Then we define a scheme (It is the pattern in what we want our data)
var employeeSchema = new mongoose.Schema({
    name:String,
    age:Number,
})

// This is just a method we can make our own method like this 
employeeSchema.methods.nameOfEmployee = function(){
    console.log("%s is the name of the employee",this.name);
}

// After declaring the schema we have to make its model 
var employeeModel = mongoose.model('Employee',employeeSchema);

// After declaring the model we have to make a object of the data we want to store 
var Employee = new employeeModel({name:"Lakshay",age:19});

// Employee.total = Employee.nameOfEmployee();

// This is used to print any error
conn.on('error',console.error.bind(console,'connection error: '));

// We then have to save the object we have stored 
// This will save the object in the database we have entered in the url 
// In this entire command we have first entered the name of the object after that we have used then function to print the result 
// After printing we have again catched if there is any error 
Employee.save().then((result)=>{
    console.log("Data is saved "+ result)
}).catch((err)=>{
    console.log(err);
});


// This is used to print the data present in the database having model name employeeModel 
// After printing the result we have closed the server using the mongoose.connection.close()
// We can put the conn.close method function in then also of above
employeeModel.find().then((result)=>{
    console.log(result)
    conn.close();
        });