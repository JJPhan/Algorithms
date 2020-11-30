// DATE: 11/29/2020
// PROBLEM: Balanced Brackets
// HIGH LEVEL STRATEGY:
	// create a hash that hold closing keys and opening brackets
	// create stack 
	// iterate through the string
		// if i is a opening => push it into a stack
		// if i is a closing 
		// => check if the last ele of stack is the matching opening  => then pop
		// => else return false
	
	// if stack is empty return true
		
    function balancedBrackets(string) {
        const brackets = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        const alpha = "abcdefghijklmnopqrstuvwxyz"
        const stack = []
        
        for (let i = 0; i < string.length; i++) {
            if (Object.values(brackets).includes(string[i]) ) {
                stack.push(string[i])
            } else if (brackets[string[i]]) {
                if (stack[stack.length -1] === brackets[string[i]]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
        return stack.length === 0 ? true : false
    }