// Interviewer: Phillip
// High Level Solution:
    // create blank hash    
        // iterate through the array
            // if the current element is already a key in the hash, add one to its value
            // otherwise create a key with the value of 1 in the hash
        // after looping through the array
            // find the value in the hash that is equal to 1
        // [ 2, 1, 3, 2, 3, 4, 1] => solution is 4
        // { 2: 2, 1: 2, 3: 2, 4: 1 }
        // Object.keys = [2, 1, 3, 4]
    
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Attempt #1
// time complexity = o(n) 
// space complexity = o(n)

function findDuplicate(array) {
    let hash = {}
    for (i = 0; i < array.length; i++ ) {
        if (!hash[array[i]]) {
            hash[array[i]] = 1
        } else {
            hash[array[i]] += 1
        }
    }

    // return the key who's value is 1;
    for (i = 0; i < Object.keys(hash).length; i++ ) {
        if (hash[Object.keys(hash)[i]] === 1) return Object.keys(hash)[i]
    }
}

// console.log(findDuplicate([ 2, 1, 3, 2, 3, 4, 1])) 

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Attempt #2
// High Level Strategy:
        // Sort Array => o(n log n) time
        // Sort Array, iterate the array by 2 each iteration;
        // if it is on the 3rd to last i
function findDuplicate(array)


