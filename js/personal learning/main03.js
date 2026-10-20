
let stringInput ="madam";

function palindromeChecker(string){
    let reversedString= string.split("").reverse().join("")
    if (reversedString==string){
        console.log("Given word is a palindrome.")
        console.log(reversedString)
    } else{
        console.log("Not a palindrome.")
        console.log(reversedString)
    }
}

// palindromeChecker(stringInput);

let inputString ="life is not peaceful";

// console.log(inputString.split(" ").reverse().join(" "));
console.log("")
inputString = "kingdom of magic"
// console.log(inputString.split("").reverse().join(""));

// console.log(inputString.split(""));
// console.log(inputString.split("").reverse());
// console.log(inputString.split("").reverse().join(""));

