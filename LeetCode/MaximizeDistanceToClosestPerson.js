// DATE: 12/10/2020
// https://leetcode.com/problems/maximize-distance-to-closest-person/
// PROBLEM: Maximize Distance to Closest Person #849
    // Given an array of rows of seats 
    // seats[i] = 1
// Contraints
    // its at least 2 seats
    // at least one seat is occupied
    // at least one seat is empty
// HIGH LEVEL STRATEGY:
    // have a max length variable to keep track of the maximum length       
    // iterate til you find a open seat
        // asign left and right pointers
        // keep moving em until oen of them hits a taken seat
        // compare to maximum length 
    // cases to consider
        // right > seats.length - 1
        // left < 0 
var maxDistToClosest = function(seats) {
    let maxDist = 0
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            let curDis = helperDist(seats, i)
            if (maxDist < curDis) maxDist = curDis
        }
    }
    return maxDist
};

// find the maximum distance given the index
    // keep expanding until you hit a taken seat
        // or go out of the bounds
    // return the distance from the closest seat

    // you will increment left and right
        // if left or right goes out of bounds => stop incrementing THAT POINT / stop checking
        // if seats[left] || seats[right] === 1 => stop incrementing completely
            // then return the distance 
var helperDist = function(seats, i) {
    let left = i - 1
    let right = i + 1
    let counter = 1   
    while ( left >= 0 || right < seats.length ) {
        if (left >= 0 && seats[left] === 1) return counter
        if (right < seats.length && seats[right] === 1) return counter
        left-- 
        right++
        counter++
    } 
    return counter 
}
// Scratch 
    // max length = 2
    // seats = [1,0,0,0,1,>0,1]
    // Try with a) [0, 1] and b) [1, 0]
    // a) [ >0 1 ]
        // left = i - 1
        // if left < 0 
            //
        // idx 0 not taken idx 1 is => 
        // taken - open = abs(1) => 1 seat
    // b) [1, 0 ]
        // 0 - 1 = abs(-1) => 1 seat