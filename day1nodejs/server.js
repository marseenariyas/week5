//what is a server?
//server is a computer programme or mechine,it listens for inoming request and responds
//               request
//        client---------->server
//              <---------- 
//               responds

const http=require('http')

const server=http.createServer((req,res)=>{
     res.writeHead(200,{'content-type':'text/plain'});
     res.end('Hellooo Everyone.....')
});
server.listen(3000,()=>console.log('server is running at http://localhost:3000'));



//How can a computer become a server?
//Any computer can be a server if it runs software that listens on a part and send back res and req

//localhost vs remote server----->ur own computer for local testing
// localhost means yourown computer 
//used for testing and development
//uses Ip:127:0:0 for localhost

//Remote server----------->another computer some where on the internet for live apps
// A remoteserver is a different computer that everyone on the internet can reach
//it has its own public ip address or domain name
//used for real user/production

//what is a port?
//a port is like vertual door(door number)on ur computer default doors are standard doors everyone
//knows ,and custom ports are ur own choosen door no.
//port 80--->get http request||-->default
//port 443----> https reqired||-->default
//port 3000,5000,8000---->coustom|--->coustom
//port 24----->remote login      |--->coustom














