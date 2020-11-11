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
// SPACE COMPLEXITY: 
// STRATEGY:             

            // iterate through array
            // save each iteration in a hash
            // check if the difference between targetSum and iteration is included in the hash
            // if so shove them into an array => return array
            // return blank array

// QUESTIONS:     
            // why does Object.keys not work?

// ATTEMPT: 
    function twoNumberSum(array, targetSum) {
        let hash = {};        
        for (let i = 0; i < array.length; i++ ) {
            hash[array[i]] = array[i]
            let missing = targetSum - array[i]
            if (Object.values(hash).includes(missing) && missing !== array[i] ) {
                return [missing, array[i]]
            }
        }
        return []
    }

