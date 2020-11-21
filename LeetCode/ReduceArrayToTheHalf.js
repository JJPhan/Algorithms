// DATE: 11/19/2020
// PROBLEM: Reduce Array Size to Half #1338.
        // https://leetcode.com/problems/reduce-array-size-to-the-half/
        // Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.
        // Return the minimum size of the set so that at least half of the integers of the array are removed.

// HIGH LEVEL STRATEGY: I did not revise my pseduocode, approached it with different strategdy 
    // Create a blank hash
    // Iterate through the initial array
    // If the current iteration does not exist in the array
    // Create a key with value of 1
    // If it does exist add 1 to its value
    // Object.value(hash) => sort || n log n 
    // Create a variable to hold the length of the array
    // Create another variable to hold how many numbers I have removed
    // And until number variable <= array.length - keep doing this
    // Otherwise return the number variable

// Kit High Level Solution => Write shorter Psuedo Code
    // Make hash
    // Iterate thru array, fill hash with freq { 3: 1, 5: 3, 2: 2, 7: 4 }
    // Take values and sort array = [ 4, 3, 2, 1]


var minSetSize = function(arr) {
    let removedNums = 0 // => 2 
	let occur = {} // { 3: 1, 5: 3, 2: 2, 7: 4 }
	let minArrLen = arr.length / 2
	let arrLen = arr.length 
	
	for (let i = 0; i < arr.length ; i++) {
        if (!occur.hasOwnProperty(arr[i])) occur[arr[i]] = 0
        if (occur.hasOwnProperty(arr[i])) occur[arr[i]] += 1
    }

    let values = Object.values(occur).sort( (a,b) => (b-a) )
    let i = 0 // 2
    while (arrLen > minArrLen ) {
	    removedNums += 1
        arrLen = arrLen - values[i]
        i += 1
    }
    return removedNums
};