// Express Validator
//It is used to check if the entered is wrong or right and it also allow us to redirect to other site 
// Here we have done multiple things 
// At first we have just created an app using express
// After that i have used the pug template to make a site 
// Then i have set get and post request 
// At first i have created a form where i have asked name,emailId,gender and age
// Then i set post request in the afterlogin page 
// Then i have checked the value whether they are satisfying the conditions 
// After that if there is no error then i have redirected this page to the afterLogin page where i have redirected values
// 
const express= require('express');
const app = express();
const bodyParser=  require("body-parser");
const {check, validationResult} = require('express-validator')
const {matchedData, sanitizeBody} = require('express-validator');
app.set('view engine','pug');
app.set(express.static('public'));
app.set('views','./public/views/expressTut18');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const urlencoded = bodyParser.urlencoded({extended:false});
app.get('/',(req,res)=>{
    res.send("<h1>Running file !</h1>");
})


app.get('/users',(req,res)=>{
    res.render('login',{name:"lakshay",Comment:"This is comments in the page"});
})
app.post('/usersLogin',(req,res)=>{
    res.render('afterlogin',{name1:req.body.name1,age:req.body.age,gender:req.body.Gender,email:req.body.Email});
})
app.post('/users',urlencoded,[
    check('name1').isLength({min:8}),  //This will check whether the name entered is not less than 8 char
    check('age').isNumeric(),    //This will check whether the age is  number or not
    check('Gender').notEmpty(),  //This will check whether it is empty or not 
    check('Email').isEmail(),   //This will check whether it an email or not 
],(req,res)=>{
    const error = validationResult(req);
    console.log(error.mapped());
    console.log(req.body);
    if(!error.isEmpty()){       //This will check if there is error or not 
        const user = matchedData(req);
        res.render('login2',{name:"lakshay",Comment:"This is comments in the page",error:error.mapped(),user:user});
    }
    else{
        const user = matchedData(req);
        res.render('afterlogin',{user:user});
    // if(error.isEmpty())
    }
})


app.listen(4044,()=>{
    console.log("App started at port 4044");
})