// DATE: 11/26/2020
// PROBLEM:Valid Parentheses
// HIGH LEVEL STRATEGY:
    // create hash with closing keys and opening value
    // create a stack
    // iterate through the string
        // if !string[i] => push string[i] into stack
        // else if string[i] => if string[i] = stack[string[i - 1]] => stack.pop()
        // else return false
    // return true

var isValid = function(s) {
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    
    const stack = [];
    for (let i = 0; i < s.length; i++) {

        if (!brackets[s[i]]) {
            stack.push(s[i])
        } else if (brackets[s[i]]) {
            if (stack[stack.length - 1] === brackets[s[i]]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return (stack.length === 0) ? true : false

};

// old notes
// 1) create a variable to hold both opening and closing brackets
// ex. opening  = [ "(", "{", "[" ]
// ex. closing = [")", "}", "]"]

// 2) break up / split the string 

// 3) iterate through the split string 
// as soon as it finds an opening bracket 
// locate the respective closing bracket

// return false if closing bracket comes before opening