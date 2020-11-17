// High Level Solution:
		// create a middle pointer
		// check to see if target is smaller or bigger than pointer
		// place left and right pointers
			// left points to the first index 
			// right points to last index
			// re-assign middle to left + right / 2 => floor it
			
// array [ 0 1 21 33 45 ]
// array [ 45 61 71 72 74] 
// left = 7
// right = 9
// middle = 7 = 72
// target = 73

function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;
	let middle 
	while (left <= right) {
		
		middle = Math.floor((left + right) / 2)
		if (array[middle] === target) {
			return middle
		} else if (array[middle] > target ) {
			right = middle - 1
		} else if (array[middle] < target ) {
			left = middle + 1
		}
	}
	return -1
}

