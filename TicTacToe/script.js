// This marks the beginning of a python script. 

// btn = document.querySelector(".btn");

let boxes = document.querySelectorAll(".btn")
let resetbtn = document.querySelector(".resetbtn")
let startbtn = document.querySelector(".startbtn")
let gameMessage = document.querySelector(".game-message")
let turn_A = true;
let count =0;
// gameMessage.classList.add(".hide")
// gameMessage.classList.remove(".show")
const winningCombinations = [//012 345 678
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

const enableBoxes = ()=>{
    count=0;
    turn_A = true;
    gameMessage.innerHTML =""
    
    boxes.forEach((box)=>{
        box.disabled = false
        box.innerText = ""
    })}


const disableBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true
    })
}


resetbtn.addEventListener("click", enableBoxes)
startbtn.addEventListener("click", enableBoxes)

const showWinner =(value)=>{
    // gameMessage.classList.remove(".hide")
    // gameMessage.classList.add(".show")
    gameMessage.innerText = `The winner is: ${value}`
    console.log("winner is +nt")
    disableBoxes()
    
}

const checkForWinner =()=>{
    if (count>=5){
    for (let combination of winningCombinations){
        let firstOne = boxes[combination[0]].innerText;
        let secondOne = boxes[combination[1]].innerText;
        let thirdOne = boxes[combination[2]].innerText;
    if (firstOne !="" && secondOne != "" && thirdOne !=""){
        if (firstOne === secondOne && secondOne === thirdOne){
            showWinner(firstOne);
        }
    }
    }}
}


boxes.forEach((box)=>{ 
//box becomes the individual element of boxes array.
//  and is usable throughout this code block

    box.onclick= ()=>{

        console.log("A button was clicked")

        if (turn_A){
            box.innerText = "O"
            turn_A = false
            count +=1
            
        } else{
            box.innerText = "X"
            turn_A = true
            count+=1
        }

        box.disabled = true
        checkForWinner()
        
    }})












// gameMessage = {
//     if (winner){
//         gameMessage.innerText = `The winner is ${winner} :)`
//         document.body.style.add(".show")
//     }else{
//         document.body.style.add(".hide")
//     }




