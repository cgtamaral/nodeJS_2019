const yargs = require('yargs');
const task = require('./Utils/TaskUtils.js.js.js');

yargs.version('1.0.1');

yargs.command(
    {   
        command:'stock',
        describe:'search current cotation for specific stock',
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
            task.findByStock(argv.name);
        }       
})