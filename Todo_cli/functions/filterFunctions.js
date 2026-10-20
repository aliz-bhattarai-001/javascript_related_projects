import inquirer from "inquirer";


export const filterDataByName = async (tasks,userReq) =>{ 
    
    return tasks.find((task)=>{
    return task.name.toLowerCase() == userReq.toLowerCase(); 
})}

export const filterDataByUrgency = async (tasks,userReq)=>{ return tasks.filter((task)=>{
    return task.urgency == userReq;

})
}

export const filterDataByStatus = async (tasks,userReq)=>{ return tasks.filter((task)=>{
    const trueOrFalse =  (userReq.toLowerCase() =='true') || (userReq.toLowerCase() =='t')
    return task.completed == trueOrFalse;
})
}

const Options = ["Name", "Urgency", "Status","No Filter"];
export const FilterBy = async()=>{
    console.log(chalk.green("Filter task? If yes filter by?\n"))
    Options.forEach((option,index)=>{
        console.log(`${index+1}. ${option}\n`);
    })
    const UserResp = await inquirer.prompt({
        type:'text',
        name: 'response',
        message: "Your choice [1-4]:  "
    })
    
    switch (UserResp.response) {
        case '1':
            let Req = getRequest(Options[parseInt(UserResp.response)-1])
            filterDataByName(tasks,Req)
            break;
        case '2':
            Req = getRequest(Options[parseInt(UserResp.response)-1])
            filterDataByUrgency(tasks,Req);
        case '3':
            let _Req = getRequest(Options[parseInt(UserResp.response)-1])
            Req = _Req.toLowerCase() == 'completed' || _Req.toLowerCase()=='true'
            filterDataByStatus(tasks,Req);
        case '4':
            getAllData(tasks);
            break;
        default:
            console.log(chalk.red("\nInvalid entry.\n"))
    }
}

export const getRequest = async(responseRequired)=>{
    const request = await inquirer.prompt({
        type:'text',
        name: 'req',
        message: `Type ${responseRequired}: `
    })
    return request.req
}