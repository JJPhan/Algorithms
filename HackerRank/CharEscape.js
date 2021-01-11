// Complete the numberOfCharactersEscaped function below.
// Date: 01/08/2021
// Problem: Number of characters escaped
// Given string that consist of lowercase English letters and the characters "#" (35),  "!" (33) 
// Determine the number of times a character will be escaped

// a character is escaped if...
    // There is a ! before it
    // Both the lowercase English letter and the "!" are between a starting and ending "#" &&
    // return number of characters that has escaped
    
// Given example = "#ab!c#de!f"
    // the string escaped once at !c
    
// have two pointers, one in the beginning and one at the end
// when the Lpointer hits # stop

function numberOfCharactersEscaped(expression) {
    let inside = false
    let esps = 0
    let abc = "abcdefghijklmnopqrstuvwxyz"
    
    for (let i = 0; i < expression.length; i++ ) {
        if (expression[i] === "#") {
            inside = !inside
        } else if ( 
            inside &&
            expression[i - 1] === "!" &&
            abc.includes(expression[i])
        )   {
                esps += 1
            }
    }
    return esps
}

// flag = false
// if string[i] === # 
//     flag = !flag
    
// if string[i - 1] === ! && flag 
//     counter += 1
    
