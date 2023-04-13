// http
// Agr ham bina res(response) ko end kare banayege toh usko koi end point nahi milega aur voh chalta rahega isliye we write res.end();
// Aur hamne jo server create kara hai usko listen bhi karna hoga (port define karna hoga) toh usko .listen(port) likhte hai 
// res.write() wale function se ham write kar skte hai 
// res.writeHead se ham content jo de rhe hai voh bata sakte hai ki kya hai text hai ya html ya pug.
// res.writeHead me pehli cheej hoti hai status code jo jada tar ham 200 hi lenge then uske baad content type 
// listen me aur function bhi daal sakte hai jaise console.log()
const http = require("http");
const server = http.createServer(function(req,res){

    // This will write as it is plain text on the website
    // res.writeHead(200,{"content-type":"text/plain"});

    // This will write it in the heading form 
    res.writeHead(200,{"content-type":"text/html"});
    
    res.write("<h1>This is nodeJs tutorial running</h1>");
    res.end();
}).listen(3000,()=>{
    console.log(`Server running on port 3000`);
});


// Iske baad nodemon istallation tha and nothing new to learn 
// Bas jab bhi nodemon laga ke run kare file toh end me .js jarur lagayio varna voh index.js ko run karega