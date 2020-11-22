// [0 1 3 0 6 12] => [1 3 6 12 0 0]
    // arr1 = [1 3 6 12]
    // arr2 = [0 0]
        // [ 1 3 6 12 0 0 ]
// [5 2 0 1 6] => [5 2 1 6 0]
    // arr1 =  [5 2 1 6]
    // arr2 =  [ 0 ]
        // [5 2 1 6 0]

// problem: move all zeros to the end while keeping the order of the integers the same
// High Level Solution:
    // create two arrays 
        // one to hold nonzeros
        // one to hold zeros
    // iterate through the array
        // if its a nonzero => arr1
        // else = arr2
    // concat them both
    // and return

function moveZeros(array){
    const nonzeros = []
    const zeros = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeros.push(0)
        } else {
            nonzeros.push(array[i])
        }
    }
    return zeros.concat(nonzeros)
}
// 1 2500000000000000050000000000 1
// [0 1 3 0 6 12] => [1 3 6 12 0 0]
    // [ 1 3  12 0 0 0 12 7 5 ]
// [5 2 0 1 6] => [5 2 1 6 0]

// High Level Solution: 
   // have pointer assigned => to first zero you see
   // if the current iteration is a integer swap with that pointer

function moveZeros(arr) {
    let secondPointer
    for (let i = 0; i < arr.length; i++) {
        if (!secondPointer && arr[i] === 0) secondPointer = i
        if (secondPointer && arr[i] !== 0) {
            arr[secondPointer] = arr[i]
            arr[i] = 0
            secondPointer += 1
        }
    } 
    return arr
}
