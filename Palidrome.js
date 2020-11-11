// DATE: 11/10/2020
// PROBLEM: PALINDROME CHECK
// takes in non-empty string -> returns boolean representing whether it is a palindrome
// HIGH LEVEL STRATEGY:
		// iterate backwards through the string
		// save each iteration/ element into a new string
		// if the new string === the actual string
		// return true otherwise return false



// SOLUTION:                
        function isPalindrome(string) {
            let paliString = ""
            for (let i = string.length - 1; i >= 0; i-- ) {
                paliString += string[i]
                
            }
            
            return (paliString === string) 
        }

// TIME COMPLEXITY : o(n)
// SPACE COMPLEXITY: - ask thomas
// STRATEGY:             
// QUESTIONS:
// ATTEMPT: 