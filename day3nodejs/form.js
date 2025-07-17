const express=require('express');
const app=express();
const cors=require('cors');
const PORT=3000

app.use(cors());
app.use(express.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
   console.log(req.body);
   res.send(`Hello ${req.body.userName},login successfull!!...`)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});