const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Practice.html');
})
app.listen(4000);