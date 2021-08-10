const express=require('express');
const mango=require('mongoose');
const app=express();
mango.connect('mongodb://localhost:27017/hello',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err,"hi"); 
});
app.get("/",(req,res)=>{
    res.send("srijjk");
})
app.listen(4000,
    (err)=>{
        console.log("aril")
    }); 