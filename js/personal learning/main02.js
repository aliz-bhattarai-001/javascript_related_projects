let factorsOfNotAPrime =[];


function isPrime(n){
    if (n<2){
        console.log("Not a prime number.")
    }
    for (let i=2; i<n; i++){
        if (n%i === 0){
            factorsOfNotAPrime.push(i)
        }
    }
    if (factorsOfNotAPrime.length!=0){
        
        console.log(`\n${n} is not a prime number.\nPrinting factors:\n${factorsOfNotAPrime}`)
    } else if( factorsOfNotAPrime.length == 0){
        console.log(`\n${n} is a prime number.`)
    }
};

isPrime(244);

// console.log(isPrime(51));


// let factorsOfNum = [];
// function PrimeOrFactors(n){
//     if (n<2){
//         return "Not a prime nor a composite number."
//     }
//     function iteratorForLoop(x){
//         for (let i=2; i<n; i++){
//         if (n%i===0){
//             console.log("Not a prime number. Presenting factors.")
//             factorsOfNum.push(i, iteratorForLoop(n/i))
//             return console.log(factorsOfNum)
//         }
//         }
//     }
//     iteratorForLoop(n)
//     return "It is a prime number."
// }


// PrimeOrFactors(99);

// let hasFactor= n%i===0
// switch(hasFactor){
//     case true:
//         factorsOfNum.push(i, n/i)
//         console.log(factorsOfNum)
//         return i++
//     case false:
//         break
// }
