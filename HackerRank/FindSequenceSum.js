// Problem: 
    // Given three integers (i, j, k) 
    // a sequence sum to be ( i ) + (i + 2) + (i + 3) ... (j) + (j - 1) + ... + k
    // increment i until i === j
    // decrement j until j === k

// High Level Solution:
    // we want to return a sum
    // create a clone of the i, j, k 
        // until this clone is === to the value of the next letter 
        // keep adding 1 to the previous iteration
    // create a sum = i
    
    // i = 0
    // j = 5
    // k = -1 
    // sum = 0 + 1 + 2 + 3 + 4 

    function getSequenceSum(i, j, k) {
        let sum = 0
        while (i < j) {
            sum += i
            i += 1
        }
        while (j > k) {
            sum += j
            j -= 1
        }
        return (sum + k)
    }