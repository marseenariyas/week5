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

/*app.use((req,res,next)=>{
    console.log('middileware 1 working..')
    //res.send('all access here')
    next()
})

app.use((req,res,next)=>{
    console.log('middileware 2 working..')
    next()
})
app.get('/',(req,res)=>{
    res.send('hellooo..')
})

app.listen(3001,()=>console.log('server running at http://localhost:3001')) */

//const middilewarefn=((req,res,next)=>{
//     console.log('middileware first working')
//     next()
// })
// app.use(middilewarefn)

// app.get('/',(req,res)=>{
//      res.send('hai Everyone....')
// })

// app.listen(3002,()=>console.log('http://localhost:3002'))


const middilewarefn=((req,res,next)=>{
    console.log("middileware first working....")
    next()
})
app.use((req,res,next)=>{
    console.log('common middileware executing...')
    next()
})
app.get('/',middilewarefn,(req,res)=>{
    res.send('hai helloooo')
})


app.post('/ login',(req,res)=>{
    res.send('welcome...')
})

app.listen(3001,()=>console.log('http:localhost:3000'))