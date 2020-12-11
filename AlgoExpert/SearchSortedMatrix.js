// DATE: 12/11/2020
// PROBLEM: Search In Sorted Matrix
	// Given a Matrix and a target integer
	// each row and colum is sorted, but it might not be like a square
	// return an array of the row and column of the target otherwise return [-1, -1]
// HIGH LEVEL STRATEGY: 
	// time = o(n + m), space = o(2) => o(1)
	// start at the bottom left
		// if the target is greater than the current number
			// that means you want to move inwards because the bigger numbers are inside
			// because it wont because in the same row
		// if the target is less than the current number
			// that means you wanna move upwards because its smaller
			// because you wanna zone in to the smaller number, so you wanna find the correct row
			// in the correct row, the target > current number

function searchInSortedMatrix(matrix, target) {
    let row = matrix.length - 1
    let col = 0
    if (matrix[row][col] === target) return [ row, col]
    
    while ( row >= 0 && col < matrix[0].length )	 {
        if (matrix[row][col] > target) {
            row--
        } else if (matrix[row][col] < target) {
            col++
        } else if (matrix[row][col] === target) {
            return [ row, col]
        }
    }
    return [-1, -1]
}