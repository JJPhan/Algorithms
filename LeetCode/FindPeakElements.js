// DATE: 12/02/2020
// PROBLEM: Find Peak Element #162
// https://leetcode.com/problems/find-peak-element/
    // Find the highest peak
    // Peak = nums[i] > nums[i + 1] & nums[i - 1]
    
    // how about em edge cases tho?
    // what if the array is < length of 3
    // what if there is no peaks
    // what if its constantly ascending or descending
    

// HIGH LEVEL STRATEGY: 

var findPeakElement = function(array) {
    if (array.length === 1) return 0
	let left = 0;
	let right = array.length - 1;
	let middle 
    
	while (left <= right) {
		middle = Math.floor((left + right) / 2)
        let greaterThanRight = (array[middle] > array[middle + 1])
        let greaterThanLeft = array[middle] > array[middle - 1]
        
        if (middle === 0 && greaterThanRight) {
            return middle 
        } else if (middle === array.length - 1 && greaterThanLeft) {
            return middle
        } else if (greaterThanRight && greaterThanLeft) {
			return middle
		} else if (array[middle] < array[middle -1]) {
			right = middle - 1
		} else if (array[middle] < array[middle + 1] ) {
			left = middle + 1
		}
	}
};

// [ 3 2 1 5 6 5 ]
// [1 2 2 3 1]
// Binary Search
    // how to modify?
    // how does binary search even work?
    // it starts with an array, disects its by half
    // check if the target is bigger or smaller
    // then it re-assigns one of the pointers, effectively cutting it by half each iteration

// how to apply it to this problem?
    // rather than a target, it's looking for a peak
    // but with binary search at least you have a sense of direction vs find peak which could be a random array with no direction


// function binarySearch(array, target) {

// 	let pointer = Math.floor(array.length / 2)
// 	let left = 0;
// 	let right = array.length - 1;
// 	let middle 

// 	while (left <= right) {
// 		middle = Math.floor((left + right) / 2)
// 		if (array[middle] === target) {
// 			return middle
// 		} else if (array[middle] > target ) {
// 			right = middle - 1
// 		} else if (array[middle] < target ) {
// 			left = middle + 1
// 		}
// 	}
// 	return -1
// }
