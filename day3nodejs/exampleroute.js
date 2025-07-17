const express=require('express')
const app=express();
const PORT=3002

const userRoutes=require('/,routes,studentRoute')
app.use('/student',userRoutes)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})