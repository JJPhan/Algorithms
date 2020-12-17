// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'stockPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY stocksProfit
 *  2. LONG_INTEGER target
 */
// Date: 12/16/2020
// Problem: Profit Targets
    // Given an array and a target
    // each item in the array represents the yearly profit of a corresponding stock
    // the analyst gathers all distinct pairs that reached target profit
    // return distinct pairs that match up to target
    
    // elements can be different 
    // can you the same pair twice
// Solution:
    // Iterate saving each element as a key 
    // Check if target - arr[i] is in the hash
        // if it is += 1 to counter
// [1 3 5 6 9 12] 12
// counter
// unique pairs 
// 3 9, 



// every time i increment the counter, i should save that pair into a hash
// only increment if the pair isnt in the hash already


// maybe i can do like target / 2, and see if this number is included in the array at least twice

function stockPairs(stocksProfit, target) {
    // basically a two sum problem
        // save each element into a hash
            // because we can use a number multiple times, save both the value and index as the hash value
            // by doing this, I can use a number ex. 6 and 6 twice to make 12
        // BUTTTTT
            // I dont want to use the same value twice as the missing number
            // ex. liek 9  and 3 (index A) and 9 and 3 (index B) 
        
        // how to do 2 sums with this info
            // check if hash has the missing value   
    
    let counter = 0
    let hash1 = {}
    let hash2 = {}
    let half = target / 2 
    let halfCounter = 0
    
    for (let i = 0; i < stocksProfit.length; i++ ) {
        hash1[stocksProfit[i]] = [stocksProfit[i], i] 
        if (stocksProfit[i] === half) halfCounter += 1
        // let missing = target - stocksProfit[i]
        // if (hash1.hasOwnProperty(missing) && i !== hash1[missing]) counter += 1
    }
//[  6 6 3 9 3 5 1 ] => [ 1 3 3 5 6 6 9] => [ 1 3 5 6 9] => 3 & 9
    if (halfCounter >= 2) counter += 1
    let uniqueNums = Object.keys(hash1) 
    
    for (let i = 0; i < uniqueNums.length; i++) {
                
        let missing = target - uniqueNums[i]
        if (hash2.hasOwnProperty(missing)) {
            counter += 1
            console.log(missing, uniqueNums[i], target)
        }
        hash2[uniqueNums[i]] = 0

    }
    return counter
}

// function main() {