
/*
 * Complete the 'countSignals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY frequencies
 *  2. 2D_INTEGER_ARRAY filterRanges
 */
// Date: 01/08/2021
// Problem: Signal Filter
    // Filters in pairs of two numbers, filters everything outside the range
    // Given n signals
    // frequencies in an array
    // series of m filters
// determine the number of singals that will get through the filters

// so you gotta pass each number into the filter
//a if the number passes -> pass those numbers into the next filter
// when the last filter is done, count the numbers in the array


//a if not exclude it from future filters
// so freq = 8 15 14 16 21
// filter = [ [10, 17], [13, 15], [13, 17] ]
// maybe iterate through and find the biggest of filter[i][0]
// iterate through and find the smallest filter[i][1]

function countSignals(frequencies, filterRanges) {
    let min = 0
    let max = Infinity
    for (let i = 0; i < filterRanges.length; i++ ) {
        let currentMin = filterRanges[i][0]
        let currentMax = filterRanges[i][1]

        if (currentMin > min) min = currentMin
        if (currentMax < max) max = currentMax
    }
    
    // return frequencies( number => {
    //     number > min && number < max
    // })
    let count = 0
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] <= max && frequencies[i] >= min) count += 1
    }
    return count
}

