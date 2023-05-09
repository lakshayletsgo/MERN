const express = require('express');
const router = express.Router();
const Employee = require('../module/employee');
// In this we are getting model of express and then we print it with the help of pug 


router.get('/', async (req, res) => {
  try {
    const records = await Employee.find({});
    // Here we have used async functions to make it store data in records and then we render it in pug
    res.render('index', { records });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
