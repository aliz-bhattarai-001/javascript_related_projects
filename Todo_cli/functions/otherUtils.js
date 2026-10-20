
import inquirer from 'inquirer';

export const extraFields = ["description", "urgency", "dueDate"]

export const promptUser = async(data)=>{
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
        }return data;}