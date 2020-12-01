// DATE: 11/30/2020
// PROBLEM: Three Number Sort
	// Given an array of integers
	// Given second array of three integers
	// first array is guaranteed to have integers from 2nd array
	// second array represents a desired order for integer in the first array
	// return first array sorted in the second array
// HIGH LEVEL STRATEGY:
	// iterate through the array
		// keep count of how many of each element from the order array
		// we can use a hash or three variables
	// iterate through array again
		// reassign elements and decrement their count value

function threeNumberSort(array, order) {
    let ele0 = order[0]
    let ele1 = order[1]
    let ele2 = order[2]
    let i = 0
    let hash = {}
    
    for (let i = 0; i < order.length; i++) {
        hash[order[i]] = 0
    }
    
    for (let i = 0; i < array.length; i++ ) {
        hash[array[i]] += 1
    }

    while (i < array.length) {
        if (hash[order[0]] > 0) {
            array[i] = order[0]
        } else if (hash[order[1]] > 0) {
            array[i] = order[1]
        } else if (hash[order[2]] > 0) {
            array[i] = order[2]
        }
        
        hash[array[i]] -= 1
        i+= 1
    }
    return array
}
        