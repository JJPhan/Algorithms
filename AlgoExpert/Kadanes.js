// DATE: 12/01/2020
// PROBLEM: Kadane's Algorithm
	// takes in nonempty array of integers
	// returns the max sum that can be 
// HIGH LEVEL STRATEGY:
	// iterate through the array
	// keep track of the current sum and beginning index
	// keep track of the max sum and max beginning index and max ending index
	// when the current iteration is a negative number
	
	// compare the sum prior to adding negative number to sum + negative
	// sum + current element vs current element
		// if sum + negative number > sum => keep iterating 
		// otherwise restart count and restart starting index 

// sum including vs just the current iteration
// array [3 5] => sum = 8 vs 5 => 8 (including old sum) => keep going
// array [10 -5] => sum = 5 vs -5 => 5 (including old sum) => keep going
// array [-5 3] => sum = -2 vs 3 => 3 (excluding old sum) => restart here 

// if maxSum > currentSum => maxSum = currentSum

function kadanesAlgorithm(array) {
	let maxSum = array[0] // -2 
	let currentSum = array[0] // -2 
	for (let i = 1; i < array.length; i++ ) {
		currentSum += array[i]
		currentSum = Math.max(array[i], currentSum)
		maxSum = Math.max(currentSum, maxSum) 
	}
	return maxSum
}