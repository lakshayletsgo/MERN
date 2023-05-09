var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Employee');
var conn = mongoose.connection;
var employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    totalHour:Number
});

var employeeModel = mongoose.model('employees',employeeSchema);

module.exports = employeeModel;