const express=require('express')
const app=express()
const cors=require('cors')


app.use(cors())

const middilewarefn=((req,res,next)=>{
    console.log('middleware first working')
    next();
})

app.use((req,res,next)=>{
    console.log('middileware executed')
    next();
})

app.get('/gf',middilewarefn,(req,res)=>{
    res.send('helloooo')
})

app.post('/ login',(req,res)=>{
    res.send("from login....")
})
app.listen(3002,()=>console.log('server runnung at http://localhost:3002'))