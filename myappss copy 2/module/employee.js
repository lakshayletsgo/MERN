var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Employee');
var conn = mongoose.connection;
var collegeSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
})

var collegeModel = mongoose.model('College',collegeSchema);

module.exports = collegeModel;