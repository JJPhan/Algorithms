// DATE: 11/11/2020
// PROBLEM: Three Number Sum
						// function takes in a non-empty array of distinct intergers && target sum
						// function should find all triplets in the array that sum up to the target sum 
						// return 2d array
						// numbers in each triplet should be ordered in ascending order
						// the triplets should be orders in ascending order 

// HIGH LEVEL STRATEGY:
						// sort array => how to sort => what is the most efficient way to sort?
							// .sort is n log n time apparently?
						// iterate 
								// => place a left counter on the right 
								// => place a right counter on the last iteration 
						// if array[i] + left counter + right counter === target sum 
						// target sum > array[i] + left + right => left += 1
						// target sum < array[i] + left + right => right += 1
						// mainArray.push([array[i], left, right].sort)
								

// [- 8 -6 1 2 3 5 6 12
function threeNumberSum(array, targetSum) {
	let mainArray = [];
	array.sort((a,b) => (a-b))

	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1; 
		let right = array.length - 1
	
		while ( left < right ) {	
			if (targetSum === array[i] + array[left] + array[right]) {
				mainArray.push([array[i], array[left], array[right]].sort((a,b) => (a-b)))
				right -= 1
			} else if (targetSum > array[i] + array[left] + array[right]) {
				left += 1
			} else {
				right -= 1
			}
		}
	}
	return mainArray
}