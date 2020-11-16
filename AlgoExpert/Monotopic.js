// DATE: 11/15/2020
// PROBLEM: Monotonic Array
			// determine whether the given array is 
					// entirely - nonincreasing or nondecreasng
// HIGH LEVEL STRATEGY:
			// create blank variable - monoIncrease = true
			// create blank variable - monoDecrease = true

			// iterate through the array
				// if array[i] <= array[i+1] => monoDecrease = false
				// if array[i] >= array[i+1] => monoIncrease = false
				// if (monoIncrease & monoDecrease === false) break => return false
			// return true

function isMonotonic(arr) {
	let monoIncr = true
	let monoDecr = true
	
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i+1]) monoIncr = false
		if (arr[i] > arr[i+1]) monoDecr = false
		if (monoIncr === false && monoDecr === false) return false	
	}
	return true	
}