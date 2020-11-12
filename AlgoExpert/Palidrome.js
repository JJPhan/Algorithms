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
            let revIdx = string.length - 1
            let idx = 0

            while (idx < revIdx) {
                if (string[revIdx] !== string[idx]) {
                    return false
                }
                idx += 1
                revIdx -= 1
            }   
            return true
        }

// TIME COMPLEXITY : o(n)
// SPACE COMPLEXITY: 
// STRATEGY:             
// QUESTIONS:
// ATTEMPT: 

