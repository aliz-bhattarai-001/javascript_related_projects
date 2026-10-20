import chalk from 'chalk';
import inquirer from 'inquirer';
import { filterDataByName } from './filterFunctions.js';
import fs from 'fs';
import { updateTask } from './updateTask.js';
const JsonFile = './data/tasks.json'
let filteredData;
// const tasks = {}



export const markComplete = async(filteredData)=>{
    let taskArr = {};
    if(fs.existsSync(JsonFile)){
        try{
            const tasks = fs.readFileSync(JsonFile,'utf-8');
            const tasksArray = JSON.parse(tasks);
            taskArr = tasksArray;
            let userRequest= {
                request : ''
            }
            while(userRequest.request ==''){
                userRequest = await inquirer.prompt(
                    {
                        type:'input',
                        name: 'request',
                        message: `Which task's completion status should be changed ? `
                    })
            }
            const userReq = userRequest.request.toLowerCase()
            try{
            filteredData = await filterDataByName(tasksArray, userReq);
            }catch(err){
                console.log(chalk.red(err.message))
            }}catch(err){
                console.log(chalk.red(err.message))
            }}
    console.log(filteredData);
    const selected = await inquirer.prompt(
        
        {
        type: 'confirm',
        name: 'confirm',
        message: `Do you wish to mark this task completed\n`,
        choices: ["yes (y)", "no (n)"]
        }
    )
    if (selected.confirm){
        filteredData.completed = true;
        filteredData.status = 'completed';
    } else{
        filteredData.completed = false;
        filteredData.status = 'Incomplete';
    }
    const UpdatedTasks = taskArr.filter((task)=>{return task.name != filteredData.name})
    UpdatedTasks.push(filteredData);
    fs.writeFileSync(JsonFile, JSON.stringify(UpdatedTasks,null,2));

}