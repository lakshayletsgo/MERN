var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Employee');
var conn = mongoose.connection;
var uploadSchema = new mongoose.Schema({
    imagename: String,
})

var uploadModel = mongoose.model('upload_files',uploadSchema);

module.exports = uploadModel;