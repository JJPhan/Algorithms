// DATE: 11/24/2020
// PROBLEM: Spiral Traverse
	// Given n x m two dimensional array
	// return 1D array with all array's element in spiral order

// HIGH LEVEL STRATEGY:
	// iterate to the end of the first array[0]
	// iterate down array[i][array[0].length]
	// iterate backwards from array[last][array[0].length - 1] to the start
	// iterate upwards from array[last - 1] to array[1]
	// repeat

	// we gotta reduce the edges every time
	// maybe use a helper function
	// basically iterating in a square
	// reduce the boundaries every time
		// starting row
		// starting column
		// ending row
		// ending column
	// stop when starting row > ending row || starting column > ending column

function spiralTraverse(arr) {
    let returnArr = []
        recursiveSpiral(0, 0, arr.length -1, arr[0].length - 1 ,arr, returnArr)
        return returnArr
    }
    
function recursiveSpiral(sRow, sCol, eRow, eCol, arr, returnArr) {
        if (sRow > eRow || sCol > eCol) return 

        for (let i = sCol; i <= eCol; i++) {
            returnArr.push(arr[sRow][i])
        }
        for (let i = sRow + 1; i <= eRow; i++) {
            returnArr.push(arr[i][eCol])
        }
        for (let i = eCol - 1; i >= sCol; i--) {
            if (sRow === eRow) break;
            returnArr.push(arr[eRow][i])
        }
        for (let i = eRow - 1; i >= sRow + 1; i--) {
            if (sCol === eCol) break;
            returnArr.push(arr[i][sCol])
        }
    recursiveSpiral(sRow + 1, sCol + 1, eRow - 1, eCol - 1, arr, returnArr)
}
    
    
    // Do not edit the line below.
    exports.spiralTraverse = spiralTraverse;