// / DATE: 11/28/2020
// PROBLEM: Roman to Integer
// https://leetcode.com/problems/roman-to-integer/submissions/
// HIGH LEVEL STRATEGY:
    // create a hash with roman keys, number value
    // create variable to hold sum
    
    // iterate through the string
        // if (string[i + 1] && hash[string[i + 1]] > hash[string[i]]) 
            // sum += next value - current value
        // else sum += string[i]
    
var romanToInt = function(s) {
    let hash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && hash[s[i + 1]] > hash[s[i]]) {
            sum += (hash[s[i + 1]] - hash[s[i]] )
            i += 1
        } else {
            sum += hash[s[i]]
        } 
    }
    return sum
};
