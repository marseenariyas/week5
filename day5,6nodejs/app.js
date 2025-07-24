const express=require('express')
const session=require('express-session')
const path=require('path')
const app=express()
const PORT=3001

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

app.use(session({
    secret : 'secret-key',
    resave :false ,
    saveUninitialized: false
}));

function protectRoute(req,res,next){
    if(req.session.isAuth){
        next();
    }else {
        res.redirect('/login')
    }
}

app.get('/login',(req,res)=>{
    res.render('login',{error:null});
});

app.post('/login',(req,res)=>{
    const {username,password}=req.body;

if(username === 'admin' && password === '1234' ){
    req.session.isAuth=true;
    res.redirect('/home')
}else {
    res.render('login',{error:'invalid'})
}
});


app.get('/home',protectRoute,(req,res)=>{
    res.render('home');
});

app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        res.redirect('/login')
    });
});

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
});