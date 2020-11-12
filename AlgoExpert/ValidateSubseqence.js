// STILL CAN OPTIMIZE => 

// DATE: 11/10/2020
// PROBLEM:
	// VALIDATE SUBSEQUENCE
		// provided with 2 non-empty arrays of integers
		// write a function that determines whether the second array is a subsequence of the first one

// HIGH LEVEL STRATEGY:
	// iterate through both array 
	// if arr1[i] !== arr2[i] pop arr2[i] 
	// if arr1 === arr2 return true else return false

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// SOLUTION:      #1          
// TIME COMPLEXITY :     
// SPACE COMPLEXITY: 
// STRATEGY:             
// QUESTIONS: 
                // why doesn't sequence === [] work?
// ATTEMPT: 

    function isValidSubsequence(array, sequence) {
        let seqIdx = 0
        for (let i = 0; i < array.length; i++ ) {
            if (array[i] === sequence[seqIdx]) seqIdx += 1
        }
        
        return (seqIdx === sequence.length)
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////