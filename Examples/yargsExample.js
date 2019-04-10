const yargs = require('yargs');

yargs.version('1.0.1');

yargs.command(
    {   
        command:'add',
        describe:'add a new task',
        builder:{
            name:{
                describe:'task name',
                demandOption:true,
                type:'string'
            },
            description:{
                describe:'task description',
                demandOption:true,
                type:'string'
            }
        },
        handler: function(argv){
            console.log(argv.name);
            console.log(argv.description);
        }       
}).command(
    {   
        command:'list',
        describe:'list tasks',
        builder:{
            name:{
                describe:'task name',
                demandOption:true,
                type:'string'
            },
            description:{
                describe:'task description',
                demandOption:true,
                type:'string'
            }
        },
        handlerList: function(argv){
            console.log(argv.name);
            console.log(argv.description);
        }       
});
 
yargs.parse();