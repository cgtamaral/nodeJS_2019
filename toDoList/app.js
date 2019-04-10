const yargs = require('yargs');
const task = require('./Utils/TaskUtils.js');

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
        handler: (argv)=>{
            task.add(argv.name, argv.description);
        }       
}).command({
    command:'list',
    describe:'list all tasks',
    handler: () =>{
        task.list();
    }
}).command({
    command:'find',
    describe:'Find one specific task',
    builder:{
        name:{
            describe:'task name',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) =>{
        task.find(argv.name);
    }
}).command({
    command:'remove',
    describe:'Remove one specific task',
    builder:{
        name:{
            describe:'task name',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) =>{
        task.remove(argv.name);
    } 
});
 
yargs.parse();