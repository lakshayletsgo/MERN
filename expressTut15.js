// In this we will learn about middleware function
// It act as a authentication page 

const express = require("express");
const app = express();
const port = 4004;

var validation = function (req, res, next) {
    console.log("MiddleWare Working");
    next();
}

// We can define the if else condition in the parameters or in the app.get function. They will work the same
var userValidation = function (req, res, next) {
    if (req.params.UserId == 'lakshay')
        console.log("MiddleWare Working in users id");
    else
        res.send("YOu are not the author");
    next();
}
// If we don't put the next function in it then it will goes on and on and won't stop even if it is true


// app.use(validation);        //This is middleWare that is working globally

app.get('/', (req, res) => {
    res.send("Loggined Successfully!");
})

app.get('/users', validation, (req, res) => {
    res.send("MiddleWare Working ") //This will only work when users request is sent 
})

app.get('/users/:UserId', userValidation, (req, res) => {
    res.send("This is middleWare in userId :" + req.params.UserId);
}) //This will only work if we give lakshay as an id  in the url


app.listen(port, () => {
    console.log(`App running at port ${port}`);
})