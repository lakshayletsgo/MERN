// FileSystem(fs)
// It is used to use a file or make changes in a file 
const fs = require("fs");
// console.log(fs);        //This will give all the functions of fs

// It is an event as it returns a call by value 
// In this first we have to pass the file location then the data type here it is utf8 and then we have to give a function that handles the exception and prints the data

fs.readFile(__dirname+"/test.txt","utf8",(err,data)=>{
    if(err)throw err;
    console.log(data);
})

// If we have to delete a file then we have to use the function fs.unlink()
// This function will delete the file and print its data
// fs.unlink(__dirname+"/test.txt",(err,data)=>{
//     if(err)throw err;
//     console.log("File deleted Successfully!!!"+data);
// })



// Now we can create a local host 
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     fs.readFile(__dirname+"/test.txt","utf8",(err,data)=>{
//         res.writeHead(200,{"content-type":"text/plain"});
//         res.write(data);
//         res.end();
//     });
// }).listen(9000,()=>{
//     console.log("Site started at port 9000");
// });

// This is the first site that I created without any help 
// Isme pehle hamne http ki file ko import kara uske baad ek server create kiya jo pichli tut me kara hua hai
// Uske baad (req,res) ka ek function call kiya aur iss baar usko hamne fs me dala taaki jo res write kara voh vahi data jo fs bula rha hai 