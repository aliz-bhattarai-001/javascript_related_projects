import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import { filterDataByName } from './filterFunctions.js';

const JsonFile = './data/tasks.json'
let filteredData;
export const deleteTask = async ()=>{
    if(fs.existsSync(JsonFile)){
        try{
            const tasks = fs.readFileSync(JsonFile,'utf-8');
            const tasksArray = JSON.parse(tasks)
            let userRequest= {
                request : ''
            }
            while(userRequest.request ==''){
                userRequest = await inquirer.prompt(
                    {
                        type:'input',
                        name: 'request',
                        message: `Name the task you want to ${chalk.red("delete")} : `
                    })
            }
            const userReq = userRequest.request.toLowerCase()
            try{
            filteredData = await filterDataByName(tasksArray, userReq);
            const displayData =()=>{
                console.log('')
                    for (const key in filteredData){
                        console.log(`${key}:${filteredData[key]}`);
                    }
                    return filteredData.name;
                console.log('')}
            console.log(`Is this the task you want to delete? (y/n): ${displayData()}`);
            userRequest = await inquirer.prompt(
                    {
                        type:"confirm",
                        name: 'request',
                        message: `Delete this? `
                    })

            if(userRequest.request){
                const UpdatedTasks = tasksArray.filter((task)=>{return task.name != filteredData.name})
                fs.writeFileSync(JsonFile, JSON.stringify(UpdatedTasks,null,2));
            
            
            }}catch(err){
                console.log(chalk.red(err.message));
            }

    }catch(err){
        console.log(err.message);
    }

}


}