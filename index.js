const express = require('express');

const app=express();
const port= 3000;

//routes
app.get('/hai',(req,res)=>{
    res.send('Hellow');
});

app.listen(port);