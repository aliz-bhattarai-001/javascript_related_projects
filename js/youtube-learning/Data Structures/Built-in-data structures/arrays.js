// a data structure that can hold a collection of values.

/* 
Can contain a mix of different data types in the same array. (string, boolean, numbers or even objects)
Resizable - no need to declare it's size while initialization.
Zero-indexed and insertion order is maintained.
Iterable -can be used with for... of loop.
*/


const myArray =[1, 2, 3, "Alfred"];

// myArray.push("homie");
// myArray.pop()
// myArray.shift();
// myArray.unshift("al00","booo");
// console.log(myArray[0]);

// //for iteration
// for (const item of myArray){
//     console.log(item)
// }

//overall : push, unshift, pop, shift (known and used) 
//slice, splice, map, concat, filter, reduce (not used nor known properly.)

myArray.splice(0,2,"hello");
// start deleting from 0 , delete 2 elements , insert these elements instead. i.e (start-index, number-of-items-to-remove, insert01, insert02, insert03...) and insert from where the data is deleted.
// console.log(myArray);

myArray.slice(2);
//returns the elements from index 2 to the end (as end point is not specified) as an array. kind of like slicing a part of the array.
myArray.slice(1,3)
//(start index - included , end index- excluded)
//slice() creates a shallow copy of the original array. (to be stored on another variable for future use, i guess.)

//filter()
// Use: Creates a new array with all elements that pass the test implemented by the provided function. Used for selection.

let filteredElements = myArray.filter(function(name){return typeof name =="string"})
//filters out and gives only those results that involve type of being string. name is a random parameter i just gave it.
// console.log(filteredElements);
// console.log(myArray)

//map()
// Use: Creates a new array populated with the results of calling a provided function on every element in the calling array. Used for transformation.
let newArray =[1,2,3];
let mappedArray = newArray.map(function(n){ 
    if (n>1){
        return n*3
    } else if (n==1){
        return 3
    } else if (n<1){
        return Math.modulus(n*3)
    }

})
console.log(mappedArray);
console.log(newArray)


//concat()
//to join two or more arrays
//eg:
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5];

let combined = arr1.concat(arr2, arr3);
// combined is [1, 2, 3, 4, 5]

// arr1, arr2, and arr3 remain unchanged


//reduce()
//reduce()
// Use: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value. Used for aggregation.
// Syntax: array.reduce(callback(accumulator, currentValue), initialValue)

// accumulator: The result of the previous callback execution.
// currentValue: The current element being processed.

// Return: The single value that results from the reduction.

//eg: (gemini)
let numbers = [1, 2, 3, 4];

// Sum all numbers in the array
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator

// Step 1: 0 + 1 = 1
// Step 2: 1 + 2 = 3
// Step 3: 3 + 3 = 6
// Step 4: 6 + 4 = 10

// sum is 10
// numbers remains [1, 2, 3, 4]


//map() and filter() combined usecase:
const employees = [
    { name: 'Alice', title: 'Developer', salary: 60000, email: 'alice@corp.com' },
    { name: 'Bob', title: 'Sr. Developer', salary: 85000, email: 'bob@corp.com' },
    { name: 'Charlie', title: 'Manager', salary: 92000, email: 'charlie@corp.com' },
    { name: 'David', title: 'Intern', salary: 40000, email: 'david@corp.com' }
];


//method-1

// 1. FILTER: Select only senior employees
const seniorEmployees = employees.filter(employee => {
    return employee.salary > 70000;
});
// seniorEmployees is now:
/*
[
    { name: 'Bob', title: 'Sr. Developer', salary: 85000, email: 'bob@corp.com' },
    { name: 'Charlie', title: 'Manager', salary: 92000, email: 'charlie@corp.com' }
]
*/

// 2. MAP: Extract the email from the filtered list
const seniorEmails = seniorEmployees.map(employee => {
    return employee.email;
});
// seniorEmails is now:
// ['bob@corp.com', 'charlie@corp.com']

//method-2
const seniorEmailsChained = employees
  .filter(employee => employee.salary > 70000) // Selects Bob and Charlie
  .map(employee => employee.email);           // Extracts their emails

console.log(seniorEmailsChained);
// Output: ['bob@corp.com', 'charlie@corp.com']


//Big-O time complexity for different cases:
//Insert/remove from the end = O(1)
// accessing = O(1)
// Inserting/ removing from the beginning = O(n) = as index of all elements must be changed.
// Searching = O(n) = in worst case it may be the last element of the search.


//push() & pop() = O(1)
// shift/ unshift/ slice/ concat / slice/ splice = O(n)
//forEach/ map / filter/ reduce = O(n)


//forEach method usecase: example (gemini)
const items = ['pen', 'notebook', 'laptop'];

console.log("--- Shopping List ---");

items.forEach((item, index) => {
  // item is the current element ('pen', 'notebook', etc.)
  // index is the position (0, 1, 2)
    console.log(`${index + 1}. Don't forget the ${item}.`);
});

// Output:
// --- Shopping List ---
// 1. Don't forget the pen.
// 2. Don't forget the notebook.
// 3. Don't forget the laptop.


//reduce() : complex usecase:
const votes = ['cat', 'dog', 'dog', 'cat', 'rabbit', 'dog', 'cat'];

const voteTally = votes.reduce((accumulator, currentAnimal) => {
  // 1. Check if the current animal is already a key in the accumulator object
    if (accumulator[currentAnimal]) {
    // 2. If it exists, increment the count
    accumulator[currentAnimal] += 1;
    } else {
    // 3. If it doesn't exist, initialize the count to 1
    accumulator[currentAnimal] = 1;
    }

  // 4. Always return the accumulator for the next iteration
    return accumulator;
}, {}); // <- **Crucial:** We start with an empty object `{}` as the initial value

console.log(voteTally);
// Output: { cat: 3, dog: 3, rabbit: 1 }