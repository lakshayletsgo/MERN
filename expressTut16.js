// How to use different template engines in nodeJs
// To use any template engine we have to install it first using npm 
// Now after install the template engine we have to set the app to that engine
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
// >>>>>>>>>>>BE VERY VERY CAREFUL USING SPACES IN PUG<<<<<<<<<<<<<<<
// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 
const express= require("express");
const app = express();
app.use('/abc',express.static('public'));
app.set('view engine','pug');
app.set('views','./public/views');
app.get('/',(req,res)=>{
    res.send("<h1>ExpressTut16 Running"); //This will automatically turn into a heading tag
})

// Here I have renderd the pug file and just given the file names that i have served in the pug file  
app.get('/users',(req,res)=>{
    res.render('expressTut16',{message:"Lakshay",title:"This is title"});
})



app.listen(4000,()=>{
    console.log("App running at port 4000");
})