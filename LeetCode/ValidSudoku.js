// DATE: 12/09/2020
// PROBLEM:Valid Sudoku
// Kit - 12/08/2020 Mock Interview
// Basically ---
    // 1) each row / column / area must contain digits with 1-9 without repetition
// HIGH LEVEL STRATEGY:
    // iterate through the row => save each number in an array
        // check if the array has the number, if it does already return false
        // this is bad because essentially imma keep using .includes which is itself o(n)...
        // plus i gotta make like 27 different arrays, 9 for each of the categories...

    // alternatively I can use a hash
        // so if im at 0-0 (which is 5)
        // Ill save it in a hash with the key of 
                // `row ${row} - ${value}` => `row 0 - 5`
                // `col ${col} - ${value}` => `col 0 - 5`
                // `area ${area} - ${value}` => `area 0-0 - 5`
            // if the key exist => return false otherwise just save the key
        // how to save the area?
            // area can be divided into 9 areas
            // so 0-0, 0-1, 0-2
            // so 1-0, 1-1, 1-2
            // so 2-0, 2-1, 2-2
        // row or col / 3 => math dot floor this
            // so like  row 8 / 3 = 2 
            //          row 7 / 3 = 2
            //          row 4 / 3 = 1
            //          row 0 / 3 = 0            

var isValidSudoku = function(board) {
    let hash = {}
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] !== ".")  {
                let flag = true
                let areaR = Math.floor(row / 3)
                let areaC = Math.floor(col / 3)
                let area = `${areaR} - ${areaC}`
                
                let rowKey = `row ${row} - ${board[row][col]}`
                let colKey = `col ${col} - ${board[row][col]}`
                let areaKey = `area ${area} - ${board[row][col]}`
                
                board.hasOwnProperty(rowKey) ? flag = false : board[rowKey] = 1
                board.hasOwnProperty(colKey) ? flag = false : board[colKey] = 1
                board.hasOwnProperty(areaKey) ? flag = false : board[areaKey] = 1
                if (flag === false) return false
            } 
        }
    }
    return true
};

// time complexity - o(n * m) where n is the length of the board, and m is the length of the subarray
// space complexity - o(n * m) where n is the length of the board, and m is the length of the subarray - because potentially, we need to use space for every one of the elements 
// set.add{‘test”}
// set.has?(test
