//what is path-modules?
//path is a build-in core module in node.js 
// ithelps handle and format file paths (combining folder name,getting file extension etc...)
// works in a way thats safe accross all operating system(window,linux,mac)

// why do we use it?
// avoid hardcording path using '/','\\'(platform-dependent)
// makes our project cross-platform safe.
// helps when joining folders,getting file types,etc.. 

// path methods----->
//1. path.join([...paths])===> combines multiple strings in to one full path,
                            // automatically using the correct seperator('/'or'\\')

const path=require('path')
//const fullPath=path.join('folder','subfolder','file.txt')
//console.log(fullPath)

//2. path.resolve([...paths])===>build an absolute path from current directory+provided folder

// const res=path.resolve('folder','file.txt')
// console.log(res)

//3. path.basename(filepath)===>return just the file name from a path

// const fullName=path.basename('/home/user/notes.txt')
// console.log(fullName)

//4. path.dirname(filepath)===>return just the directory name from a path

// const dir=path.dirname('/home/user/notes.txt')
// console.log(dir)

//5. path.extname(filepath)===>returns the file extension

// const extension=path.extname('indext.html')
// console.log(extension)

// <--------------------------------------os module--------------------------------------------------->
// os module========>operation system module
// it is a build-in Node.js core module
// use it to get info about our system
// cpu,memory,userinfo,uptime,platform,architecture and more......

// <---------------------os module methods--------------------->
// 1. os.platform()===>gives the platform ur os is running on
const os=require('os')
  console.log(os.platform());
 
//2. os.arch()======>return cpu architecture 
  console.log(os.arch());  

//3. os.cpus()=====>gives detailes about each cpu core on our mechine
  console.log(os.cpus());
  
//4. os.totalmem()====>return total memory (RAM) in bytes
 // console.log(os.totalmem());
  console.log(os.totalmem()/(1024**3).toFixed(2)+'GB');
  
//5. os.freemem()======>gives you the amount of free memory (RAM)available
  console.log(os.freemem());  

//6. os.hostname()=====>return your computers hostname (name of the system)
  console.log(os.hostname());

//7. os.uptime()======>return the uptym of system(how long its been running)in seconds
  console.log(os.uptime());

//8. os.userInfo()======>gives info about current logged-in user
  console.log(os.userInfo());  
  
//9. os.type()=====>gives the os typ
  console.log(os.type());  

//10. os.homedir()======>gives the path of your home directory
  console.log(os.homedir());  

