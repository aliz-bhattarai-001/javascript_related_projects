import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';

const filePath = "./data/lastid.txt";
const JSONfile = "./data/tasks.json";

try{
    if (fs.existsSync(filePath)){
        const lastID = fs.readFileSync(filePath, "utf-8");
        console.log(lastID);
    }else{
        fs.writeFileSync(filePath,"1");
    }
} catch(err){
    console.log(err.message);
}
// const ID_tracker = './data/id.json'
const now = new Date()
// +1 in getDate() as it seems jan is considered as 0.
const currentDate = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}` 
//method one of getting date in desired format.


// const currDate = now.toDateString(); 
//method 2 of getting date. 
//kinda not how I wanted.
// console.log(currDate);


export const addTask = async ()=>{
    const data ={
        id: "", // functionality to be added later.
        name: '',
        description: "No description added.",
        dueDate: "Not Added",
        status: 'Incomplete', 
        //completed (when completed: true), Incomplete (when completed: false)
        completed: false, // true , false
        createdAt: '',
        updatedAt: '',
        urgency: 'Neutral' //high, medium, neutral
    }
    
    const extraFields = ["description", "urgency", "dueDate"]

    const promptUser = async()=>{
        for (const field of extraFields) {
            const response = await inquirer.prompt(
                {
                    type: 'list',
                    name: "choice",
                    message: `\nDo you want to add ${field} to task? (y or n)\nResponse: `,
                    choices: ["y", "n"]
                }
            )
            if (response.choice == "y"|| response.choice=="yes"){
                const input = await inquirer.prompt(
                    {
                        type:"text",
                        name: field,
                        message: `\n${field} >>> `
                    }
                )
                data[field]=input[field];
            } 
            else{
                
                continue;
            }
}}
        const input = await inquirer.prompt(
            {
                type: 'text',
                name: 'title',
                message: chalk.blue("\nEnter the title for the task: "),
            })
        data.name = input.title;
    if(data.task===''){
        return addTask()}

    await promptUser();
    data.createdAt = currentDate;
    data.updatedAt = currentDate;
    

let tasksArray = [ ];
    if (fs.existsSync(JSONfile)) {
            const fileContent = fs.readFileSync(JSONfile, "utf-8");
            try {
                // Parse existing data (if file is empty, this might fail, so we catch)
                tasksArray = JSON.parse(fileContent);
                if (!Array.isArray(tasksArray)) {
                    // If file contains corrupt data that isn't an array, reset it
                    tasksArray = [];
                }
            } catch (error) {
                // If JSON is invalid (or file is empty), start with empty array and then assign data outside this try -catch block to the empty errray
                tasksArray = [];
            }
            
        }
        console.log("\nVerify if this is the data you want to store: ")
        console.log('')
        for( const key in data){
            const value = data[key]
            console.log(`${key} : ${value}`);
        }
        console.log('')

        const allowedResponses =["yes", "no","y","n"];
        let input2 ={
            response : ''
        };

        while(!(allowedResponses.includes(input2.response))){
            input2 =await inquirer.prompt(
                        {
                            type:"text",
                            name: 'response',
                            message: `Do you wish to save this? (yes or no) `
                        })
                        
                if(input2.response =="yes" || input2.response =="y")
                {
                    try{
                            if (fs.existsSync(filePath)){

                                const lastID = fs.readFileSync(filePath, "utf-8");
                                // console.log(lastID);
                                data.id = parseInt(lastID);

                                const newID = parseInt(lastID)+1;
                                fs.writeFileSync(filePath,newID.toString());
                                // fs.appendFileSync(JSONfile,JSON.stringify(data),2);
                                
                            }else{
                                console.log("File not found. Creating tasks from id = 1.");
                                fs.writeFileSync(filePath,'1');
                                data.id=1;
                            }}catch(err){
                                console.log(err.message);
                            }

                    tasksArray.push(data);
                    fs.writeFileSync(JSONfile, JSON.stringify(tasksArray,null, 2));
                    
                } else if (input2.response=="no"||input2.response=="n"){
                    console.log(chalk.red("\n--terminating task creation--\n"));
                    console.log(chalk.blue("--Reinitiating task creation--"));
                    return addTask();
                }}

}