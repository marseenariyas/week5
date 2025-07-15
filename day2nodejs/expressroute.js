 //create an Express server with 3 routes (/,/about./contct)

 const express=require('express')
 const app=express();

 app.get('/',(req,res)=>{
    res.send('This is Home page')
 })
 app.get('/about',(req,res)=>{
    res.send('This is about page')
 })
 app.get('/contact',(req,res)=>{
    res.send('This is contact')
 })

 app.listen(3000,()=>console.log('server is running at http://localhost:3000'))