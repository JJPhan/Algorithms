// DATE: 12/01/2020
// PROBLEM: Plus One #66
// https://leetcode.com/problems/plus-one/
// High Level Solution:
    // iterate backwards
        // if the current element < 8
            // arr[i] + 1
            // return arr
        // else
            // arr[i] = 0;
    // basically its gonna run the loop once more and return it as soon as its a non-9 number
    // if it finishes the loop
    // basically unshift 1 to the front
    // return arr
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9 ) {
            digits[i] += 1
            return digits
        } else {
            digits[i] = 0
        }
    }
    
    digits.unshift(1)
    return digits
};