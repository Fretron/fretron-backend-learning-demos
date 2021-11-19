#! /usr/bin/env node

//get commander package so that we can set commands, options & more
const { program } = require('commander')

//get list module which provides functionalities to fetch commands
const listModule = require('./commands/list')
var showListFunction = listModule.list

//get add module which provides functionalities to store tasks in a list 
const addModule = require('./commands/add')
var addTaskFunction = addModule.add

//get mark done module which provides functionalities to mark tasks as done
const markDoneModule = require('./commands/mark-done')
var markDoneFunction = markDoneModule.markDone

//set the name, action & description of command
program.command('list')
       .description('This command lists all the tasks available')
       .action(showListFunction)

program.command('add <task>')
       .description('This command adds task to the todo list')
       .action(addTaskFunction)    
       
program.command('mark-done')
       .description('This command marks commands done')
       .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
       .action(markDoneFunction)       

//parse method is used to parse the input of the user so that commander can figure out which 
//command the user is running and execute it       
program.parse()


               
