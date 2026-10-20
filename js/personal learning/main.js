// console.log("Hello world");

// let myArray = [0,1, 2 , 3 , 4, 5];

// let length =myArray.length;

// console.log(length);

// myArray.unshift("alfred","Homie", 2, 5);
// result =[ 'alfred', 'Homie', 2, 5, 0, 1, 2, 3, 4, 5 ]
// console.log(myArray);


// myArray.shift("Homie", "alfred");
//or myArray.shift("alfred", "Homie");
// or simply the best myArray.shift()
// only shifts/removes the first element of the array regardless other arguments.
//result: [ 'Homie', 2, 5, 0, 1, 2, 3, 4, 5 ]
// console.log(myArray);

// -- string split, reverse and join. --


// let myString ="Hello";
// let arrayOfMyString = myString.split("");
// console.log(arrayOfMyString);
        // [ 'H', 'e', 'l', 'l', 'o' ]

// let reversedArray = arrayOfMyString.reverse();
// console.log(reversedArray);
        // [ 'o', 'l', 'l', 'e', 'H' ]

// let joinedReversedString = reversedArray.join("");
// console.log(joinedReversedString);
        // olleH

//String (longer) split and rejoining.
// let myString = "Hello, My name is Alfred.";

// let arrayOfMyString = myString.split("");
// console.log(arrayOfMyString);
        // [
        // 'H', 'e', 'l', 'l', 'o', ',',
        // ' ', 'M', 'y', ' ', 'n', 'a',
        // 'm', 'e', ' ', 'i', 's', ' ',
        // 'A', 'l', 'f', 'r', 'e', 'd',
        // '.'
        // ]

// let reversedArray = arrayOfMyString.reverse();
// console.log(reversedArray);
        //
        //  [ '.', 'd', 'e', 'r', 'f', 'l',
        //   'A', ' ', 's', 'i', ' ', 'e',
        //   'm', 'a', 'n', ' ', 'y', 'M',
        //   ' ', ',', 'o', 'l', 'l', 'e',
        //   'H']
        // 

// let joinedReversedString = reversedArray.join("");
// console.log(joinedReversedString);
        // .derflA si eman yM ,olleH


//one line to do it all would be myArray.split("").reverse().join("");

//split(" ")= splits at every spacing
//split("-") =splits at every dash (-)
//join(" ")= joins array but with spaces after each character/element of string array
//join("-") = joins but with dashes(-) after each character.



// function hasDuplicate(nums) {
//         for (let i=0; i<nums.length; i++){
//                 let j= nums.length-i-1;
//                 let checker = nums[i]===nums[j];
                        
//                 if (checker){
//                         return true
//                 }
//         }
//         return false
// }


// let num1 =[1,2,3,4];
// console.log(hasDuplicate(num1));