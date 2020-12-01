// DATE: 11/30/2020
// PROBLEM:Palindrome Number. LeetCode .9
    // https://leetcode.com/problems/palindrome-number/
    // determine if the number is a palidrome
// HIGH LEVEL SOLUTION: 
    // if it is negative, just return false
    // create a reverse variable
    // create a loop, while the number > 0 
    // => each iteration...
        // shrink the number down by 1 number place by / 10
        // reassign reverse by multiplying it by 10 and adding the last number from x


var isPalindrome = function(x) {
    if (x < 0) return false
    return x === reversed(x) ? true : false
};
    
var reversed = function(x) {
    let reverse = 0
    while ( x > 0) {
        reverse = reverse * 10 + x % 10
        x = Math.floor(x / 10)
    }
    return reverse
}