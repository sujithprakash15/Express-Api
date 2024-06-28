const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productmodel');

const app=express();
const port= 3000;


//json middleware
app.use(express.json());

//routes
app.get('/hai',(req,res)=>{
    res.send('Hellow');
});

app.post('/Product',async(req,res)=>{
try {
    const product= await Product.create(req.body)
    res.status(200).json(product);

} catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})   
}
})

mongoose.connect('YOUR MONGODB SERVER')
.then(()=>
{
    console.log('connected to MongoDB')
    app.listen(port, ()=>{
        console.log("Node API app is running on port 3000");
    });
}).catch(()=>{
    console.log(error) 
})