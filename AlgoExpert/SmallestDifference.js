// DATE: 11/14/2020
// PROBLEM: Smallest Difference
			// function that takes in non-empty arrays of integers
			// finds the pair of numbers ( one from each array) whose absolute difference is closest to zero
			// returns an array containing these two numbers with the number in the first array in the first position
					
// HIGH LEVEL STRATEGY:
			// sort both arrays and create individual pointers for each one
			// create a variable to hold the difference between the first indices
			// iterate through the array.length
			// if the difference between 

// [-1, 3 ,5, 10 20, 28]
// [ 15, 17, 26, 134, 135]
function smallestDifference(arrayOne, arrayTwo) {

	arrayOne.sort((a,b) => (a-b))
	arrayTwo.sort((a,b) => (a-b))
	let ptr1 = 0 
	let ptr2 = 0 
	let diff = Math.abs(arrayOne[0] - arrayTwo[0])  
	let idx1 = 0
	let idx2 = 0
	

	while ((diff !== 0) && (ptr1 < arrayOne.length) && (ptr2 < arrayTwo.length)) {
		// ptr1
		// ptr2
		// diff
		// newDiff
		let newDiff = Math.abs(arrayOne[ptr1] - arrayTwo[ptr2]) 

		if (newDiff < diff) {
			diff = newDiff
			idx1 = ptr1
			idx2 = ptr2
		}
		
		if (arrayOne[ptr1] < arrayTwo[ptr2]) {
			ptr1 += 1
		} else {
			ptr2 += 1
		}
	}
	
	return [arrayOne[idx1], arrayTwo[idx2]]
}