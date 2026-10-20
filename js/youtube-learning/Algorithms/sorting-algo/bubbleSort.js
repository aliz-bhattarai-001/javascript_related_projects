
// Bubble sort

// Compare adjacent elements in the array and swap the positions if they are not in the intended (asc or des) order.
//poor compared to the rest of the sorting algo and mostly for intro and interviews only.

//Problem: Given an array of integers, sort them. (ascending or descending.)

//each iteration checks and sends the biggest/smallest number to the last as needed by the comparison method.


function bubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for (i=0; i<arr.length-1; i++)
            if (arr[i]>arr[i+1]){
                let tempVar = arr[i]
                //temporary var to hold the value of arr[i]
                arr[i]=arr[i+1]
                //assigns value of arr[i+1] to arr[i]
                arr[i+1]=tempVar
                // assigns value held by tempVar to arr[i+1]
                // arr[i+1] =arr[i] would not work here because arr[i] would already be assigned the value of arr[i+1] in the above code line.
                swapped = true
            }
    }while(swapped)
        //runs the do portion once and checks if swapped is updated to true or not. if true runs it again.
}


let myArray = [1, 2, 6 , 3, 12, 9,5];

//let sortedMyArray = [bubbleSort(myArray)];
//bubbleSort(arr) doesn't explicitly return any value so nothing gets stored in this variable. this it's value is "undefined".
bubbleSort(myArray)
console.log(myArray); 
//this also prints the sorted array as the sorting is done by the bubbleSort(arr) in the above line.

//myArray gets sorted by the bubbleSort(arr) function and gets updated here.
let sortedMyArray = myArray; // myArray values get stored here (which is updated by the bubbleSort(arr) method).
console.log("");
console.log(sortedMyArray);


//big-O = O(n^2) 
// for every input the loops (for and while) in total run twice.

