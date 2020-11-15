// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
// Example: 
// Input:

// asteroids = [1,2,3,-3,4,-2]
// Asteroids = [ 1, 2, 4, -2]
// Asteroids = [1, 2, 4]
// Output = [1, 2, 4]

// look at i & i+1 check if they are the same direction 
// if yes continue
// if opposite directions compare sizes and destroy depending on condition
// on destruction start from beginning 



// slice excludes second number

// Problem: 
// Array of asteroids , negative = left, positive = right, number = size
// Solution: 
// Determine the smallest difference in indices 
// Determine which of the elements are bigger
// If equal remove both from array
// otherwise keep the bigger of the two

// Function asteroids(array) {
	
// 	Let newArr = Array
// 	Let flag = false

// 	While (!flag) {
// 		Flag = true
// 		For ( let i = 0; i < array.length - 1 ; i++ ) {
// If (Math.abs(newArr[i]) !== newArray[i] && 
// 	Math.abs(newArr[i + 1] === newArray[i + 1]) ||
// (Math.abs(newArr[i]) === newArr[i] && 
// 	math.abs(newArr[i + 1] !== newArr[i + 1])) {

// 	If (newArr[i] + newArr[i + 1] === 0) {
// 		newArr = newArr.slice(0, i) + newArr.slice(i + 2, newArr.length - 1) 
// }
// If (Math.abs(newArr[i] > Mat.abs(newArr[i + 1]){
// 	newArr = newArr.slice(0, i +1) + newArr.slice(i + 2, newArr.length -1 ) 
// } else {
// newArr = newArr.slice(0, i) + newArr.slice(i + 1, newArr,length - 1)
// } 


// }


