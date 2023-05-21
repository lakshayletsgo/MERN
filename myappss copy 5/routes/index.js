const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const College = require('../module/employee');
const Upload = require('../module/upload');
const collegeModel = require('../module/employee');
const uploadModel = require('../module/upload');  
// const records = await College.find({});
// In this we are getting model of express and then we print it with the help of pug 

router.use(express.static(__dirname+"./public/"));

var Storage = multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
}); 

var upload = multer({
  storage:Storage,
}).single('file');

router.post('/upload',upload,async function(req,res){
  var imageFile = req.file.filename;
  var success = req.file.filename+"Uploaded SuccessFully";
  var imageDetails = new uploadModel({
    imagename:imageFile
  });
  try{
    const uploaddd =  uploadModel.find({});
    imageDetails.save().then((doc)=>{
    uploaddd.exec().then(function(data){
        res.render('upload_file',{title:success,records:data})
      })
    })

  }catch(err){
    console.log(err);
  }
})

router.get('/upload',async (req,res)=>{
  try{
    const uploaddd = uploadModel.find({});
    uploaddd.exec().then((data)=>{
      res.render('upload_file',{title:"Lakshay7",records:data})

    })
  }catch(err){console.log(err)}
})
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
