import chalk from 'chalk';
import inquire from 'inquirer';


export  const getChoices = async ()=>{
        console.log(chalk.white("\n--List of available functions and tasks.--\n"))
        
        const list_of_choices = ["add-task", "Mark task as complete", "Delete a task", "Update task description", "Get all tasks"];

        list_of_choices.forEach((choice, index)=>{
            console.log(chalk.white(`${index+1}. ${choice}`))
        })
        const userChoice = await inquire.prompt(
        {
        type: 'list',
        name: 'choice',
        message: `Select your choice [1-${list_of_choices.length}]\n`,
        choices: list_of_choices
        })
        return userChoice
    }


export const getfilteredtasks= async ()=>{
    console.log(chalk.white("\n--List of available filter options--\n"))
        
        const filteringChoices = ["by creation date", "Incomplete", "Completed", "By urgency", "Get all tasks"];

        filteringChoices.forEach((choice, index)=>{
            console.log(chalk.white(`${index+1}. ${choice}`))
        })
        const userChoice = await inquire.prompt(
        {
        type: 'list',
        name: 'choice',
        message: `Select your choice [1-${filteringChoices.length}]\n`,
        choices: filteringChoices
        })
        return userChoice
}