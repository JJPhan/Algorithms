// DATE: 11/25/2020
// PROBLEM: https://leetcode.com/problems/remove-k-digits/

// High level solution:
    // Split given string into an array -> this will be the queue
    // Create a empty array -> this will be the stack
    // Shift / take out the first element from the queue
    //        Push it into the stack
    // If the last element from the queue[-1] > stack[0]
    //         Pop from queue
    //         K -= 1
    // Do this til k = 0
    // When iterating is done
    // Queue + stack 
    //          If k !== 0
    //          Pop off til k = 0
// "10200" k = 1

var removeKdigits = function(num, k) {
    let queue = num.split("")   // queue = [1 2 3 4 5 0 4 0]
    let stack = []              // stack = [ 0 0 4 0]
                                // k = 0 
    
    while (k !== 0 && queue.length !== 0) {
        stack.push(queue.shift())
        while (stack[stack.length - 1] > queue[0] && k > 0) {
            stack.pop()
            k -= 1     
        }
    } 
    stack = stack.concat(queue)
    while (k > 0) {
        stack.pop()
        k -= 1
    } 
    
    while (stack[0] === '0') { 
        stack.shift()
    }
    
    if (stack.length === 0) return "0"
    return stack.join("")
};