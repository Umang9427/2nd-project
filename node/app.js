console.log(__filename);
function hello(name){
    console.log('hello '+name);
}
//console.log(global);
//console.log(module);
let logger=require('./logger');
const temp=new logger();
temp.log('Hi Umang');

const path=require('path');   //path is a module in node
let pathObject= path.parse(__filename);
console.log(pathObject);

const os=require('os');         //os module
let totalMemory=os.totalmem();
let freeMemory=os.freemem();
console.log(totalMemory);
console.log(freeMemory);

const fileSystem=require('fs');          //filesystem module
fileSystem.readdir('./', function(err, files){
    if (err) console.log(err)
    else console.log(files);
});                 //do not use synchoronous methods

const EventEmitter = require('events');        //Events module returns class
//const emitter= new EventEmitter();             //emitter is an object because it is an instance of class
const Logger=require('./logger');
const logger2=new Logger();
logger2.on('message received', arg =>{        //arg=> is equal to function(arg) //on method is same as listener method which creates a listener for emit method given below.
    console.log('listener called',arg);    //Use arg or e or eventArg
});  
logger2.log('Hi Umang again');

const http= require('http');
const server= http.createServer();
server.on('connection', (socket)=>{
    console.log('New connection on port 3000..')
});                     
server.listen(3000);            //listen acts like emit function because it is an event emitter.
console.log('Listening on port 3000..')
const server2= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello Umang');
        res.end();
    }
});
server2.listen(4000);
console.log('listening on port 4000');