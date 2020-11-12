// DATE: 11/10/2020
// PROBLEM: TWO SUMS 
    // function takes in an 
        // nonempty array of distinct integers
        // target sum
    // if two numbers of input array === target sum
        // return numbers in new array
        // if no numbers add together, just return the empty array

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


// SOLUTION:                #1
// TIME COMPLEXITY :      o(n^2)
// SPACE COMPLEXITY: 
// STRATEGY:    
	// iterate through array as in o(n^2) time
	// to avoid iterating through the same index twice 
        // second iterate should be +1 index

 // ATTEMPT:        
    function twoNumberSum(array, targetSum) {
        let twoSums = [];
        
        for (let i = 0; i < array.length - 1; i ++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] + array[j] === targetSum) twoSums.push(array[i], array[j])
            }
        }
        return twoSums 
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// SOLUTION:                #2 
// TIME COMPLEXITY :      o(n)
// SPACE COMPLEXITY:      o(n) 
// STRATEGY:             

            // iterate through array
            // save each iteration in a hash
            // check if the difference between targetSum and iteration is included in the hash
            // if so shove them into an array => return array
            // return blank array

// ATTEMPT: 
    function twoNumberSum(array, targetSum) {
        let hash = {};        
        for (let i = 0; i < array.length; i++ ) {
            hash[array[i]] = array[i]
            let missing = targetSum - array[i]
            if (missing !== array[i] && hash[missing] ) {
                return [missing, array[i]]
            }
        }
        return []
    }

// EXPLANATION: 
    // we are given an array and a targetSum
    // we want to find any pairs that add up to the target sum
    // we should iterate through the array, save each iteration into a hash map
    // if the hash map contains the difference between the current iteration and the target sum, 
        // return that pair of current iteration and target sum
    // otherwise return an empty array


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


// work for o(n log n) or o(log n)

// SOLUTION:             #3   
// TIME COMPLEXITY :     
// SPACE COMPLEXITY: 
// STRATEGY:             
// QUESTIONS:
// ATTEMPT: 