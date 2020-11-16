// DATE: 11/15/2020
// PROBLEM: MOVE ELEMENT TO END
    // Given an array of integers and an integer
    // Write a function that moves all instances of that integer to the end of the array
    // Return the array
// HIGH LEVEL STRATEGY: 
    // set two points at the start and end of the array
    // increment them depending
        // if left && right === target
            // left += 1
        // if left && right !== target
            // left += 1
        // if left === target && right !== target
            // swap
        // if left !== target && right === target
            // right -= 1
        
    function moveElementToEnd(array, toMove) {
        let left = 0;
        let right = array.length - 1
        
        while (left < right) {
            if (array[left] === array[right] && array[left] === toMove) {
                right -= 1;
            } else if (array[left] !== toMove && array[right] !== toMove) {
                left += 1
            } else if (array[left] === toMove && array[right] !== toMove) {
                let holder = array[left] 
                array[left] = array[right]
                array[right] = holder
                left += 1
            } else {
                right -= 1
            }
        }
        return array
    }