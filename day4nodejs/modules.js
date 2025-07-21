//whaat is modules?
//modules is a reusable blocks of code that splits the program smaller pieces to manage complicity
//module means inside node.js files
//reuse code without rewriting

//types of modules  
//three typs----->1. core modules
//          ----->2. local modules
//          ----->3. third-party modules

//core modules-------->
//  build in with node.js
//  dont need to install them using npm bcz core modules are already buid in node js
//eg======>    fs----File System operations (read, write files)
// //          path--Work with file paths
//             http--Create server, handle requests
//             os----Info about operating system
//             url---Parse URL strings

//1. fs modules(file system modules)
     //#. fs.writeFile()-->3 arguments
                        // 1.path
                        // 2.content
                        // 3.callback(error)  
   const fs=require('fs') 

//    fs.writeFile('text.txt','Hello world',(err)=>{
//        if(err)throw err;
//        console.log('file created')
//     })

 //2. fs.readFile()------>3 arguments
                        // 1.path
                        // 2.encoding.'utf8'(read cheyyunnd eed reediyil aanu enn kodukkan)
                        // 3.callback(error)
    //  fs.readFile('text.txt','utf8',(err,data)=>{
    //     if(err){
    //         console.error('error reading file',err);
    //     return
    //     }
    //     console.log('file reading',data);
    //  });                     

 //3.appendFile()--------->3 arguments 
                          // 1.path
                          // 2.content
                          // 3.callback(error)

//   fs.appendFile('text.txt','Hellooo Everyone...',(err)=>{
//     if(err){
//         console.error('Error file',err);
//         return;
//     }
//        console.log('file completed');
//   });                        

//4.fs.unlink()------------> 3 arguments 
                          // 1.path
                          // 2.callback(err)

// fs.unlink('text.txt',(err)=>{
//     if(err){
//         console.error('deleting files',err);
//         return
//     }
//     console.log('file deleted successfully....');
       
// })  

//5.fs.existsSync------> is a synchronus function used to check whether a file or directory exists 

if(fs.existsSync('file.txt')){
   console.log('file Exist!!..');
}else{
   console.log('File does not Exist');
}
