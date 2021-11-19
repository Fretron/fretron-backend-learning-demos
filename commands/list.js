// get conf package which allows us to save persistent information on the user’s machine
const conf = new (require('conf'))()

//get chalk package which allows us to print colored messages to the console
const chalk = require('chalk')

//This functions shows the list of tasks with their index added by command on console
function list () {
    //get todoList which contains the task added by command
    let todoList = conf.get('todo-list')
    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

//exports module allows us to use the function of different module in our module
module.exports.list = list