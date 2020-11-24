// DATE: 11/23/2020
// PROBLEM: Find Three Largest Numbers
					// Function that takes in an array of at least 3 integers
                    // return sorted array of three largest integers
                    
// ~~~OLD GARBO ~~~ HIGH LEVEL STRATEGY:
	// create a new array and sort the first three elements (top3)
	// iterate through the main array - i
		// iterate through top3 - j
			// check if the current element I is greater than top3[0]
				// if place current element i by reassign an value to route to j

// high level solution
	// create an array of 3 filler elements ex. -infinity
	// create conditionals to see if the current element fits into the top3 array
		// if it can => iterate through the top3 array
			// we want to make room to insert this NEW element
			// we do this by re-assigning the current element in top3 the proceeding element
			// we do this until we hit the spot we wanna hit
			// then we assign that spot this NEW element

function findThreeLargestNumbers(arr) {
    let top3 = [-Infinity, -Infinity, -Infinity]

    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] > top3[2]) {
            placementFunc(arr[i], top3, 2) 
        } else if (arr[i] > top3[1]) {
            placementFunc(arr[i], top3, 1)
        } else if (arr[i] > top3[0]) {
            placementFunc(arr[i], top3, 0)
        }
    }
    return top3
}

function placementFunc(ele, top3, i) {
    for (let j = 0; j < top3.length; j++) {
        if (i !== j) {
            top3[j] = top3[j + 1]
        } else {
            top3[j] = ele
        }
    }
    return top3
}
            