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
module.exports = router;
