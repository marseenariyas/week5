const express=require('express')
const app=express()

app.get('/',(req,res)=>{
   res.send('Welcome')
})
app.post('/',(req,res)=>{
    res.send('Helloo Everyone...!!')
})
app.get('/',(req,res)=>{
    res.send('from seconds')
})
app.use((req,res)=>{
    res.status(404).send('invalid route')
})

app.listen(3000,()=>console.log('server is running at http://localhost:3000'))

