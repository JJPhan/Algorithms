// DATE: 12/01/2020
// PROBLEM: Climbing Stairs #70
// https://leetcode.com/problems/climbing-stairs/
// HIGH LEVEL STRATEGY:
// ex. 
// n = 1 
// 1 solution
    // => 1 step

// n = 2  
// 2 solutions
    // => 1step + 1 step
    // => 2 steps

// n = 3 
// 3 solutions
    // => 1s + 1s + 1s
    // => 1s + 2s
    // => 2s + 1s

// n = 4  
// 5 solutions
    // => 1s x 4
    // => 2s + 1s + 1s
    // => 1s + 2s + 1s
    // => 1s + 1s + 2s
    // => 2s + 2s

// n = 5 //
// 8 solutions 
    // => 1s x 5
    // => 1s + 2s + 2s
    // => 2s + 1s + 2s
    // => 2s + 2s + 1s
    // => 1s + 1s + 1s + 2s
    // => 1s + 1s + 2s + 1s
    // => 1s + 2s + 1s + 1s
    // => 2s + 1s + 1s + 1s

// Recursion & Memoization
// var climbStairs = function(n, memoz = {}) {
//     if (n <= 1) return 1
//     if (memoz[n]) {
//         return memoz[n]
//     } else {
//         memoz[n] = climbStairs(n - 1, memoz) + climbStairs(n - 2, memoz)
//     }
//     return memoz[n]
// };

// Tabulation & Iteration
// var climbStairs = function(n) {
//     const hash = {
//         1: 1,
//         2: 2
//     }
//     for (let i = 1; i <= n; i++) {
//         if (!hash[i]) hash[i] = hash[i - 1] + hash[i - 2]
//     }
//     return hash[n]
// }


// Tabulation & Iteration 
// attempt #2
var climbStairs = function(n) {
    let turtle = [ 1, 2 ] // n, step solution
    if (turtle.includes(n)) return n

    for (let i = 3; i <= n; i++) {
        if (i === n) return turtle[1] + turtle[0]
        if (i % 2 !== 0) turtle[0] = turtle[0] + turtle[1]
        if (i % 2 === 0) turtle[1] = turtle[0] + turtle[1]
    }
}


