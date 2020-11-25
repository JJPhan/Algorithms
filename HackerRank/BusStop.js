/*
 * Complete the 'kthPerson' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER k // 2                     // capacity of all of em buses
 *  2. INTEGER_ARRAY p // [1 4 4 3 1 2 6] // how long u willin to w8
 *  3. INTEGER_ARRAY q // [1 2 3 4 5 6 7] // when da bus arrives
 */

// Problem
    // there are N people in line
    // theyre waiting for a numbered from 1 to n
    // each person has a limit P
    // if the bus reaches time P => person will leave the line and miss the bus
    // bus is empty & has capacity of K
    // given a number of queries Q, 
        // print the index / number ( 1- indexed) of the Kth person who catches the bus
    // want to return 
    
// High Level Solution
    // iterate through the bus array 
        // create a capacity counter
        // iterate through people array
            // check if the person made bus ( check if q >= p ), and if it is, subtract 1 from capacity counter
            // if capacity counter === 0; return people array index 

function kthPerson(k, p, q) {
    const newArr = []
    const memo = {}
    let busLow = Infinity
    
    for (let i = 0; i < q.length; i++) {
        if (memo.hasOwnProperty(q[i])) {
            newArr.push(memo[q[i]])
            continue
        }
        if (busLow <= q[i]) {
            newArr.push(memo[busLow])
            continue
        } 
        
        let counter = k;
        for (let j = 0; j < p.length; j++) {
            if (q[i] <= p[j]) counter -= 1
            if (counter === 0) {
                newArr.push(j + 1)
                memo[q[i]] = j + 1
                break;
            }
            if (j === p.length - 1) {
                busLow = Math.min(busLow, q[i]) 
                
                memo[q[i]] = 0
                newArr.push(0)                   
            }
        }
    }
    return newArr
}
