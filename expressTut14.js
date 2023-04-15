// In this we will study about the routing in website
const express = require("express");
const app = express();
const port = 6969;
app.get("/",(req,res)=>{
    res.send("Hello");
    console.log("App is started");
})
app.get("/xyz",(req,res)=>{
    res.send("<h1>Users data accessed</h1>");
})
app.get("/xyz/data",(req,res)=>{
    res.send("<h1>Users Entire data accessed</h1>");
})

// req handles the parameter functions like here is we put :Id in the id tag then we can access the data or the id the users have put in the url  
app.get("/xyz/data/:Id",(req,res)=>{
    res.send("<h1>Users data accessed with id : </h1>"+req.params.Id);
})
// If we don't put anything in the url then it will give error so we should put ? after the Id so that if there is any id then it will display it otherwise not 
// We can as many id as we want like here 

app.get("/xyz/:Id/books/:BooksId?",(req,res)=>{
    res.send("<h1>Users data accessed</h1>"+req.params.Id+" and the book id is: "+req.params.BooksId);
})
// Be careful of the spaces in the url 
// Here we have added books id as well

app.get("/xyz/ab?cd",(req,res)=>{
    res.send("/xyz/ab?cd");
})
// This url will search for the url abcd and acd as b is optional 

app.get('/ab+cd', (req, res) => {
    res.send('ab+cd')
  })
// This route path will match abcd, abbcd, abbbcd, and so on.

app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })
// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

// app.get(/a/, (req, res) => {
//     res.send('/a/')
// })
// This route path will match anything with an “a” in it.


app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })
//   This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.


app.get('/xyz/users/:from-:to',(req,res)=>{
    res.send("You have a flight from "+req.params.from+" to "+req.params.to);
})
// This is used to from and to of a flight 


app.get('/xyz/users/:from?.:to?',(req,res)=>{
    res.send("Your current time is "+req.params.from+" to "+req.params.to);
})
// This is almost same as from and to isme bas url me . dalna hoga  and isme ham choice daal skte hai ki hame value deni hai ya nhi 
// Basically optional ke liye ham . wla use karte hai 

app.get('/xyz/example/:Id(\\d+)',(req,res)=>{
    res.send("This is just an id");
})
// This will ensure the entered value is a number not a string

app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})