// DATE: 11/28/2020
// PROBLEM: Longest Palindromic SubString
				// function takes in a string - returns its longest palndromic substring
				// only one longest palindromic substring
// HIGH LEVEL STRATEGY:
	// double for loops - o(n^2) strategy 
	// create a longest variable 
		// double loop to hit every single combo
		// if current iteration > longest variable.length -> overwrite
		// return longest variable
        function longestPalindromicSubstring(string) {
            let longestPali = ""
            for (let i = 0; i < string.length; i++) {
                for (let j = i; j < string.length; j++){
                    let current = string.slice(i, j + 1)
                    if (isPali(current) && current.length > longestPali.length) longestPali = current
                }
            }
        return longestPali
    }
    function isPali(string) {
        let pali = []
        for (let i = string.length - 1; i >= 0; i--) {
            pali.push(string[i])		
        }
        return (pali.join("") === string ) ? true : false
    }
    