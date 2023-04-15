const express = require("express");
const app = express();
app.use('/static',express.static('public')); //Here i have served the static folder which name is public and i have written static here because if a user see my website it will show that pic or the css has been served from the static folder rather than the actual name. This helps in hiding files name 
// One can also put their JavaScirpt in the public folder and use it in the html 

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/site.html");
}); //Here i have send my html file and deployed it using the get command

app.listen(3000,()=>{
    console.log("App started at port 3000");
});//Here it is normally just listening the send file

// That how u can easily write code and deploy a site using express with all the script and css 