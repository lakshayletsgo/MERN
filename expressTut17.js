// How to post request and use of body parser
// Thank God(Its been 3 hours since i has started this file and started learning about post request)
// Finally i understood what it is 
// So basically we first put the post argument in the form or whatever 
// Then we just have to get them and we put them in the other pug file 
// To do that we have to install the body-parser then we import that package
// And just use it in the app and u r all set 
// To send the data you have taken as input use the req.body.(the name of the input tag where you have taken the input)

const express= require('express');
const app = express();
const bodyParser=  require("body-parser");
app.set('view engine','pug');
app.set(express.static('public'));
app.set('views','./public/views/expressTut17');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("<h1>Running file !</h1>");
})

// app.get('/users',(req,res)=>{
//     res.render('expressTut17',{name:"lakshay",Comment:"This is comments in the page"});
// })
app.get('/users',(req,res)=>{
    res.render('loginpageTut17',{name:"lakshay",Comment:"This is comments in the page"});
})

app.post('/users',(req,res)=>{
    res.render('expressTut17',{name1:req.body.name1,age:req.body.age,gender:req.body.Gender,email:req.body.EmailID});
})


app.listen(4044,()=>{
    console.log("App started at port 4044");
})