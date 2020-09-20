const EventEmitter = require('events');        //Events module returns class
//const emitter= new EventEmitter();     This emitter object is different from the one created in app.js. hence we extend this class in another class

class Logger extends EventEmitter{ 
    log(message){                 //function keyword is not required because inside a class it is called method.
        console.log(message);
        this.emit('message received',{id: 1,url: 'http'});    //id and url are the arguments 
    }
}
module.exports=Logger;