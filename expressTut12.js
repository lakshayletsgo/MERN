// Express Begin
// Express is a module or framework of Node Js 
// It is used to ease the line of code and decrease the number of lines of code
// To install write npm install express
// To create an express site 

const express = require("express");
const app = express();

// console.log(app); //This will give all the packages of the express

app.get("/",(req,res)=>{
    res.send("Hello, This is first express site");
    // res.end();
});
app.get("/users",(req,res)=>{
    res.send("Users data accessed ");
    // res.end();
});

// Even if we don't give any function or arguement after the port number, the site will work
app.listen(9000,()=>{
    console.log("Site launched at port 9000");
});


// We can put port number in some const and then pass the const instead of the number itself