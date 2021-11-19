const conf = new (require('conf'))()
const chalk = require('chalk')

function add(task){
    let todoList = conf.get('todo-list')

    if (!todoList) {
        //default value for todos-list
        todoList = []
    }

    // adds the task in todoList
    //key 'text' contains the task added by command
    //key 'done' gives the information whether the task is completed or not
    todoList.push({
        text: task,
        done: false

    })

    console.log(
        chalk.green.italic('Task has been added successfully!')
    )

    conf.set('todo-list', todoList)
}

module.exports.add = add