// Express Validator -2
// If i have to post a data we have to bodyParse it 
// In this we will also learn about how to make custom properties to define
// If we have to use the same login page for both error and showing then use error function in the login page as well 
// If we have to make custom properties to define then we can just make a method in which our property is checked

const express= require('express');
const app = express();
const bodyParser  = require('body-parser');
const{check, validationResult} = require('express-validator');
const{matchedData, sanitizeBody} = require('express-validator');
const port = 3040;
app.set('views','public/views/expressTut19');

app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const params=  {name:"Lakshay",title:"Practice Express Validator",Content:"This is form Fill it!!"};
app.get('/',(req,res)=>{
    res.send("<h1>Working</h1>")
})
app.get('/login',(req,res)=>{
    var error  = validationResult(req);
    res.render('login1',{name:"Lakshay",title:"Practice Express Validator",Content:"This is form Fill it!!",error:error.mapped()})
})
app.post('/login',[
    check('name','Length of the name is too small').isLength({min:7}),
    check('Age','It is not a number').isNumeric(),
    check('Gender','Not selected'),
    check('Email','Wrong Email Entered').isEmail(),
    check('Password','PassWord is too short').isLength({min:7}),
    check('confirmPassword').custom((value,{req})=>{
        if(value!=req.body.Password){
            throw new Error("Password doesn't match the previous entered one")
        }
        return true;
    })
],(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
    console.log(error);
    const users = matchedData(req);
    res.render('login1',{name:"Lakshay",title:"Practice Express Validator",Content:"This is form Fill it!!",error:error.mapped(),users:users})
    }else{
        const users = matchedData(req);
        res.render('login3',{users:users,error:error.mapped()});
    }
})
app.listen(port,()=>{
    console.log(`App started at port ${port}`);
})