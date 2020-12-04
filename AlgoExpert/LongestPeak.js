// DATE: 12/03/2020
// PROBLEM: Longest Peak
	// we want to find the longest peak
	// basically the length of a consecutive incline then a consecutive decline
// HIGH LEVEL STRATEGY:
	// find the peak => 
		// if i > i - 1 
		// &&  i < i + 1
	// keep expanding outwards maybe?
		// create a left & right pointer
		// keep moving them outwards until
			// left < left - 1
			// right < right + 1
		// save difference in maxLength right - left
	
function longestPeak(array) {
    let maxLen = 0
    let len = 0
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] > array[i+1] && array[i] > array[i-1]) {
            let left = i - 1
            let right = i + 1
            while (left > 0 && array[left] > array[left - 1]) {
                left -= 1
            }
            while (right < array.length && array[right] > array[right + 1]) {
                right += 1
            }

            len = right - left + 1
            if (len > maxLen) maxLen = len
        }
    }
    return maxLen
}