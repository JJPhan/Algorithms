// just the notes - refer to LeetCode Folder

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// https://leetcode.com/problems/valid-sudoku/

// Example 1:

// Sudoku board divided into 9 parts
// Part 1
// col wise is arr[0][0] - arr[0][2]
// Row wise is arr[0]0] - arr[2][0]
// Part 2
// Col is arr[0][3] - arr[0][5]
// Row is arr[3][0] - arr[5][0]















// Input: board = [1, 4] Math.floor(row or col / 3) 
//   0    1   2   3   4   5   6   7   8
// [["5","3",".",".","7",".",".",".","5"] 	0 
// ,["6",".",".","1","9","5",".",".","."] 	1
// ,[",".",".",".","6",".",".",".","3"]  		2
// ,["4.","9","8",".",".",".",".","6","."]	3
// ,["8"",".",".","8",".","3",".",".","1"]	4
// ,["7",".",".",".","2",".",".",".","6"]		5
// ,[".","6",".",".",".",".","2","8","."]		6
// ,[".",".",".","4","1","9",".",".","5"]		7
// ,[".",".",".",".","8",".",".","7","9"]]	8
// Output: true
// Array[0][0] = 5;
// // it has a row 0, column 0
// // hash set and strings
// Hash[`row ${row}, ${array[row][i]}`] = true
// Hash[row 0, 5] = true
// Hash[`col ${col}, ${array[col][i] = 
// Hash[seg 0-0] = [5]
// Check if (Hash[`col ${i} ${array[row][i]}`] = true 
// How to save it in a hash
// 	Save it with a key of the row or column or set?
// 	Should use strings
// 0-0 0-1 0-2
// 1-0 1-1 1-2
// 2-0 2-1 2-2
// Array = [ [] [] ]
// “I” will be the changing variable 

// set.add{‘test”}
// set.has?(test

// // should I use a hash or an array to keep track
// // if i use an array, I can check if the current element is included in the array
// // 
// Check rows
// -Check array[row][i]
// -Check if the individual elements are unique and is between 1-9
// Check columns 
// -Check array[i][col]
// -Check if everything from that col is unique and is between 1-9
// Check segment/ part
// - Math.floor(row or col / 3) 
