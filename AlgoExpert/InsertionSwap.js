// DATE: 11/26/2020
// PROBLEM: Insertion Swap
// HIGH LEVEL STRATEGY:
    // check if the current element < previous element
        // if so -> swap
        // keep comparing until 

function insertionSort(array) {
    for (let i = 1; i < array.length; i++ ) {
        if (array[i] < array[i - 1]) {
            swap(i, array)
        }
    }
    return array
}

function swap(i, array) {
    let current = array[i]
    array[i] = array[i - 1]
    array[i - 1] = current
    for (let j = i - 1; j > 0; j-- ) {
        if (array[j] < array[j - 1]) {
            swap(j, array)
        } else {
        break
    }
    }
}