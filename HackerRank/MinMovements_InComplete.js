/*
 * Complete the 'minimumMovement' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY obstacleLanes as parameter.
 */

// IMCOMPLETE
// Problem: Racing Car
// car can move sideways but always foward
// can can move to anylane at anymoment
// find minimum number of sideway movements 

// we start in the middle lane
    // lane = 2
    // if oL[i] === lane => moves += 1, lanes = [] 
    
    // we see if the current obs === lane
    // if it is then we have to move
    // and how do we determine the new lane? 
    // you always have two options?

// maybe we can count how many times each number appears?
// and add one to the smallest number

// so as soon as it is started thats when i can initiate doing the hash stuff
function minimumMovement(obstacleLanes) {
    let freq = {} 
    let started = false
    let bIdx = 0
    
    for (let i = 0; i < obstacleLanes.length; i++) {
        let current = obstacleLanes[i]
        if (current === 2) {
            started = true
            bIdx = i 
            break
        }        
    }
    
    if (started === false) return 0
    // for (let i = bIdx; i < obstacleLanes.length; i++ ) {
    while (started) {
        let i = bIdx 
        let current = obstacleLanes[i]
        if (freq.hasOwnProperty(current)) {
            freq[current] += 1 
        } else {
            freq[current] = 1
        }
        i += 1 
    }
    return Math.min(...Object.values(freq)) + 1    
}
