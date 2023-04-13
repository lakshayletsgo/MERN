// Sync and Async methods of fs
// Jab ham fs ke functions ko dhekte hai toh usme har method ka ek normal method hota aur ek sync method hota hai 
// By default saare functions async hote hai 

// const fs = require("fs");

// console.log(fs);
// fs.readFile(__dirname+"/test.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });
// console.log("File ended successfully");
// As we can see pehle ("File ended successfully") print ho rha hai par hame file ka data pehle chahiye toh yaha par ham fs.readFileSync lagayege

const fs = require("fs");

console.log(fs);
fs.readFileSync(__dirname+"/test.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log("File ended successfully");