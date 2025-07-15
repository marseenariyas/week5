*const http=require('http');
const { url } = require('inspector');

const Server=http.createServer((req,res)=>{
     res.writeHead(200,{'content-type':'text/plain',
         'Access-Control-Allow-Origin':'*'
});
if(req.url=='/'&& req.method=='GET'){
     res.end('Hello Everyone Welcome to Eonix...')
}else if(req.url=='/'&& req.method=='POST'){
     res.end('Helloo...')
}else if(req.url=='about'){
     res.end('About Page')
}else{
     res.end('Page not fount')
}
});

Server.listen(3001,()=>console.log('server running http://localhost:3001')); */