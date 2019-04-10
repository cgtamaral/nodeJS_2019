const fs = require('fs');
//const chalk = require('chalk');
const list = () =>
{
    const tasks = loadTasks();

    tasks.find((task) => console.log('Task: ' + task.name + " Description: " + task.description));
}

const find = (name) =>{
    const tasks = loadTasks();

    const task = tasks.find((task) => task.name == name);
    if(task)
    {
        console.log('Task: ' + task.name + " Description: " + task.description);
    }
    else
    {
        console.log('Task not found!');
    }
}

const add = (name, description) =>
{
    // node inspect-brk app.js
    //debugger
    const tasks = loadTasks();
    const duplicatedTasks = tasks.find((task) => task.name == name);

    if(!duplicatedTasks)
    {
        const task = {name, description};
        tasks.push(task);

        saveTasks(tasks);
    }
    else
    {
        throw new Error('This task already exists!');
       //console.log(chalk.red('This task already exists!'))
    }
   
}


const remove = (name) =>{
    const tasks = loadTasks();

    const taskForSave = tasks.filter((task) => task.name != name);

    saveTasks(taskForSave);
    console.log('Task ' + name + ' removed!');
}

const loadTasks = ()=>
{
    try
    {
        const tasksBuffer = fs.readFileSync('tasks.json');

        return JSON.parse(tasksBuffer.toString());
    }
    catch(ex)
    {
        return [];
    }
}

const saveTasks = (tasks) =>
{
    const tasksJSON = JSON.stringify(tasks);
    
    const buffer = fs.writeFileSync('tasks.json', tasksJSON);
}

module.exports = {add, list, find, remove}