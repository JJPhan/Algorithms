// DATE: 12/09/2020
// https://leetcode.com/problems/search-a-2d-matrix/
// PROBLEM:Search a 2D Matrix #74
    // find target in 2D array
    // each row is ascending
    // last thing in the row is greater than the first thingy in the next row

//. binary search [ 0 1 2 3 4 5 6 L7 MT8 R9 ] target = 8
// you have two pointers, left 0 and right 9 and middle at 5
// y
// HIGH LEVEL STATEGY - ATTEMPT # 2 : BINARY SEARCH DIS TIME
    // How do binary search work?
        // You find the middle 
        // compare that to the target
            // if middle === target return uh true 
            // or if middle > target
                // you uh resign right pointer to the middle - 1
                // re-evaluate middle
            // or if middle < target
                // you resign the left pointer to middle + 1
                // re-evaluate middle
        // stop when left > right
            

// How to adapt binary search for this problem???
    // iterate through the rows
        // compare the last element of the row with the target
        // if the element > target => do binary search
            // if binary search returns nothin => return false
    // if you iterate to the end and nothin => return false
    // if you find the target => return true

    var searchMatrix = function(matrix, target) {
        if (matrix.length === 0) return false
        const lastIdx = matrix[0].length - 1
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][lastIdx] === target) return true
            if (matrix[i][lastIdx] > target) {
                return doBinary(matrix[i], target) ? true : false
            }
        }
        return false
    }
    
    var doBinary = function(row, target) {
        let left = 0
        let right = row.length - 1
        while ( left <= right ) {
            let middle = Math.floor((left + right ) / 2)
            if (row[middle] === target) {
                return true
            } else if (row[middle] > target) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
        return false 
    }
    // left = idx 0  v1
    // right = idx 2 v5
    // middle ( 2 + 0 ) / 2 = idx 1 v3
    // middle > target
    // right = 1 - 1

    
    // HIGH LEVEL STRATEGY - ATTEMPT #1:
        //  worst way => o(n * m ) searching through the entire array
        // otherwise maybe we can just do like a binary search kind of thing?
        // wait like uh iterate by the row? Look at the last element of the row
        // if the last element of the row > than the target, iterate backwards in the row
    
    // Attempt # 1 - BAD COMPLEXITY D:  ( Technically time is o(n + m), but it could be o(log n))
    // var searchMatrix = function(matrix, target) {
    //     for (let i = 0; i < matrix.length; i++ ) {
    //         let rowLen = matrix[0].length - 1
    //         if (matrix[i][rowLen] >= target) {
    //            for (let j = matrix[0].length - 1; j >= 0; j--) {
    //             if (matrix[i][j] === target) return true
    //             }
    //         } 
            
    //     }
    //     return false
    // };