import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
const JSONfile = './data/tasks.json'

let tasksArray = [];
if (fs.existsSync(JSONfile)) {
    const fileContent = fs.readFileSync(JSONfile, "utf-8");
    try {
        //parsing data to js object format.
        tasksArray = JSON.parse(fileContent);
        const response = await inquirer.prompt(
            {
                type:'text',
                name:"responsed",
                message: 'Do you wish to filter the tasks ? (y/n) '
            }
        )
        if(response.responsed=='yes'|| response.responsed=='y'){
            return getfilteredtasks()
        }
        console.log(tasksArray);
        } catch (error) {
            console.log(error.message);
            tasksArray = [];
    }}