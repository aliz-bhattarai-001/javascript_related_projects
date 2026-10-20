// This marks the beginning of commands for the cli

import {Command} from 'commander';
import chalk from 'chalk';
// import inquire from 'inquirer';
import { getChoices, getfilteredtasks } from './functions/getChoices.js';
import { addTask } from './functions/addTask.js';
import { deleteTask } from './functions/deleteTask.js';
import { markComplete } from './functions/markCompleted.js';
import { updateTask } from './functions/updateTask.js';

const program = new Command();

console.log(chalk.cyan("status: 200 (OK)"))
program
.name("todo-cli")
.description("A simple cli todo program.")
.version("1.0.1")


program
.command("Start")
.description("--Initializes the program.--")
.action(
    async ()=> {
        console.log(chalk.green("\n--Program Initialized--\n"));
        const result = await getChoices();
        console.log(result)
        switch(result['choice']){
            case '1': 
                await addTask();
                break;
            case '2':
                await markComplete();
                break;
            case '3':
                await deleteTask();
                break;
            case '4':
                await updateTask();
                break;
            case '5':
                await getfilteredtasks();
                break;
            default:
                console.log("woahhh");
                break;
        }
        }
    
)



program
.command("functions")
.description("Generates the list of available Commands for the program.")
.action(()=>{
    console.log(chalk.white("yo yo yo."))}
)

program.parse(process.argv)
