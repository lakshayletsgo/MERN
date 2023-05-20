const express = require('express');
const router = express.Router();
const College = require('../module/employee');
const collegeModel = require('../module/employee');
// const records = await College.find({});
// In this we are getting model of express and then we print it with the help of pug 


router.get('/', async (req, res) => {
  try {
    const records = await College.find({});
    console.log(records)
    // Here we have used async functions to make it store data in records and then we render it in pug
    res.render('index', { records:records, title:"Lakshay",valuee:10});
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});




router.post('/',async(req,res)=>{
  try{
    const records = await College.find({});
    var collegeDetails = new College({
      name:req.body.name,
      email:req.body.email,
      age:req.body.age,
    })
    
    collegeDetails.save().then((err,res1)=>{

        res.render('index',{records:records,title:"Lakshay2"});
    })
  }catch(err){
    console.log(err);
    res.status(500).send('Error in outside loop of Post method')
  }
})


router.post('/search', async(req,res)=>{
  try{
    
    var fltrName = req.body.name;
    var fltrEmail = req.body.email;
    var fltrAge = req.body.age;
    if(fltrName!=''&&fltrEmail!=''&&fltrAge!=''){
      var fltrParameter ={$and:[{name:fltrName},
        {$and:[{email:fltrEmail},{age:fltrAge}]}
      ]} 
    }else if(fltrName!=''&&fltrAge==''&&fltrEmail!=''){
      var fltrParameter ={$and:[{name:fltrName},{email:fltrEmail}]}
      
    }else if(fltrName==''&&fltrAge!=''&&fltrEmail!=''){
      var fltrParameter ={$and:[{age:fltrAge},{email:fltrEmail}]}
    }else if(fltrName!=''&&fltrAge!=''&&fltrEmail==''){
      var fltrParameter ={$and:[{age:fltrAge},{name:fltrName}]}
    }else{
      var fltrParameter = {};
    }
    const records = await College.find(fltrParameter);
    
    res.render('index',{records:records, title:"Lakshay3"})
  }catch(err){
    console.log(err)
  }
})

router.get('/delete/:id',async(req,res)=>{
  try{
    const records = await College.find({});
    var id = req.params.id;
    const del= College.findByIdAndDelete(id);
    del.exec().then(function(err){

      res.redirect("/");
    }  )
  }catch(err){
    console.log(err);
  }
})


router.get('/edit/:id',async(req,res)=>{
  var id = req.params.id;
  var edit = College.findById(id);
  edit.exec().then(function(data){
    console.log("THis is edit =="+data);
    res.render('edit',{title:"Lakshay5",records:data});
  })
})
router.post('/update/',async(req,res)=>{
  var update=  College.findByIdAndUpdate(req.body.id,{
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,
  })
  update.exec().then(function(data){
    // console.log("THis is edit =="+data);
    res.redirect("/")
    // res.render('edit',{title:"Lakshay5",records:data});
  })
})
module.exports = router;
