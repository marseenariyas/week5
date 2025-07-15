//what is middleware in express?
//middleware function sit between the raw incoming request and ur final route handler

//middleware functions in express that has access to
//req---request
//res---response
//next--fn to move to the next middleware

//it runs btwn receving and request and sending a response.
// often used for logging,authentication,parsing etc..


//types of middleware
//Built-in middleware ----> express.json(), express.static()
//Application-level middleware---->custom functions you write (eg, logging)
//Third-party middleware------> eg, cors, body-parser, morgan




const express=require('express')
const app=express()
const cors=require('cors')


app.use(cors())

app.use((req,res,next)=>{
    console.log('middleware first working')
    next();
})

app.use((req,res,next)=>{
    console.log('middileware executed')
    //next();
})

app.get('/',(req,res)=>{
    res.send('helloooo')
})
app.listen(3002,()=>console.log('server runnung at http://localhost:3002'))