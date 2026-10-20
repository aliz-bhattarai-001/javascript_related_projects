//This marks the beginning of a javascript file.

// Binary search req- sorted array of data (ascending/descending) to work.

function binarySearch(arr , target){
    let startIndex= 0;
    let endIndex = arr.length -1;
    while (startIndex<= endIndex){
        let middleIndex = Math.floor((startIndex+endIndex)/2);
        if (target === arr[middleIndex]){
            return middleIndex
        } 
        // if the mid term is the req target return it's index.

        else if(target>arr[middleIndex]){
            startIndex = middleIndex +1
        }
        //if target is greater than the mid term then start searching towards the higher side (i.e where higher values lie.)
        
        else if(target<arr[middleIndex]){
            endIndex = middleIndex-1
        }
        //if target is less than the mid term then start searching towards the lower side (i.e where lower values lie.)
    }
    return -1
    // if nothing happens then simply return -1.
}

let myArray =[1, 2, 3, 4, 5];
let anotherArray = [-5,-4,5,7,20];
let unsortedArray =[1,2, 3,-2,-3];

let res1 = binarySearch(myArray, 5);
let res2 = binarySearch(anotherArray, -5);
let res3 = binarySearch(unsortedArray, -3);

console.log(res1+ " "+ res2+ " "+ res3);

// 4, 0,(correct as array is sorted) but -1 for the third as (array is not sorted.)

// Big-O notation - O(logn)