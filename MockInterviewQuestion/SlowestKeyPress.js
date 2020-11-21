// https://docs.google.com/document/d/1HaV9S5M3Afu3VNa3tdCsH9W_zcjWspzO3IHcAtMd9I4/edit
// https://medium.com/codingwithalex/slowest-key-hackerrank-problem-solution-in-python-a002ef802bff

// Problem: 
// Determine which key takes the longest to press => return a key(s)?
// keyTimes = [ [0,2], [1,5], [0,9], [2,15] ] 
// first element is ascii
// second element represents the time the key is pressed since the start of the test

// Ex. 
// Output: key 2, or c (the last index) because 15 - 9 = 6 // 
// return the key translated into ascii => basically the letter it represents

// High Solution: 
// create three variables
	// longestTime: to keep track of longest time
	// currentTime: to keep track of the the current time 
	// longestIdx: because I need to store the longestTime index 
// iterate through the array
	// compare the currentTime to longestTime
		// if longestTime < currentTime => longestTime = currentTime, save idx in longIdx
// after iterating through the array
// key into the longestIdx, grab the first element of the array	ex. [2] from [2, 15]
// translate that into ascii
// return that letter

function slowestKey(arr) {
	let longTime = arr[0][1] 
    let longIdx 
	let currentTime 
	let alpha = "abcdefghijklmnopqrstuvwxyz"

	for (let i = 1; i < arr.length; i++) {
        currentTime = arr[i][1] - arr[i - 1][1] 
        if (currentTime >= longTime) {
            longTime = currentTime
            longIdx = i
        }
    }
return alpha[arr[longIdx][0]]
}
