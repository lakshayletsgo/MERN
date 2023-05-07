// CURD Operation
// Create Update Read Delete
// Don't use the throw error command in the mongodb as it is a throwback command and mongoose don't accept them 
// And don't multiple close command as it will close the server there and won't execute the rest commands


const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Employee");
var conn =  mongoose.connection;

var collegeSchema = new mongoose.Schema({
    name:String,
    rollNo:Number,
})

var collegeModel = mongoose.model('College',collegeSchema);

var College = new collegeModel({
    name:"Lakshay",
    rollNo:100
})

// This will save a object in the db
College.save().then((result)=>{
    console.log("Data saved "+result);
    // conn.close();
}).catch((err)=>{
    console.log(err);
})


// This will return the entire data 
collegeModel.find({}).then(function(data){   
    console.log(data);
    // conn.close();
});

// This will give the object having the following id 
collegeModel.findById({_id:"645640692c1e6d4d8ffc7c3e"}).then(function(data){
    console.log(data);
    conn.close();

})

// This will find the data and update it  
collegeModel.findByIdAndUpdate

// This will delete all the data 
// collegeModel.deleteMany({name:"Lakshay"}).then(()=>{
//     console.log("Deleted Successfully");
//     conn.close();
// });