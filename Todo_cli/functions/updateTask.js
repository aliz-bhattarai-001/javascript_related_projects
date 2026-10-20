import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import { filterDataByName } from './filterFunctions.js';
import { promptUser } from './otherUtils.js';

const JsonFile = './data/tasks.json'
let filteredData;


export const updateTask = async ()=>{
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
                        message: `Name the task you want to ${chalk.yellow("Update")} : `
                    })
            }
            const userReq = userRequest.request.toLowerCase()
            try{
            filteredData = await filterDataByName(tasksArray, userReq);
                console.log('--Retrieved Data to update--')
                    for (const key in filteredData){
                        console.log(`${key}:${filteredData[key]}`)
                    }
                console.log('');
            userRequest = await inquirer.prompt(
                    {
                        type:"confirm",
                        name: 'request',
                        message: ``
                    })
                    
                
            if (userRequest.request){
                const UpdatedTasks = tasksArray.filter((task)=>{return task.name != filteredData.name})
                const updated_data = await promptUser(filteredData)
                const now = new Date()
                const currentDate = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`
                updated_data.updatedAt = currentDate;
                UpdatedTasks.push(updated_data)
                fs.writeFileSync(JsonFile, JSON.stringify(UpdatedTasks,null,2));

            
            }}catch(err){
                console.log(chalk.red(err.message));
            }

    }catch(err){
        console.log(err.message);
    }

}
}

