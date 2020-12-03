
/*
 * Complete the 'playlist' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY songs as parameter.
 */

// DATE: 12/02/2020
// PROBLEM:
    // only can pick songs in pairs
    // only pairs of songs with sum of multiples of 60 
        // ex. 60 120 180
    // given list of song durations, calculate the total number of different song pairs that can be choosen
    // return 
// HIGH LEVEL STRATEGY:
    // basically a two sum problem
    // iterate through the songs
    // save each song in a hash
    // check if the combo is divisible by 60
        // songs[i] + x % 60 === 0
    // increment variable by 1

// attempt 1: too long, time limit exceeded 
// function playlist(songs) {
//     let counter = 0
//     for (let i = 0; i < songs.length; i++ ) {
//         for (let j = i + 1; j < songs.length; j++) {
//             if () counter += 1
//         }
//     }
//     return counter
// }


// missing = target - songs[i]
// hash.hasOwnProperty(missing) counter += 1

// [ 10 30 50 90 ]
// 10 + 90 = 100 % 60 = 40 => left += 1
// 30 + 90 = 120 % 60 = 0 => counter += 1, left += 1
// 50 + 90 = 140 % 60 = 20 => reset left, right -= 1
// 10 + 50 = 60 % 60 = 0 => counter += 1, left += 1
// 30 + 50 = 80 % 60 = 20 => reset left right -= 1
// while left < right

// [10 30 50 90]
// 10 + 90 = 100 % 60 = 40 left += 1
// 30 + 90 = 120 % 60 = 0 counter += 1 left += 1
// 50 + 90 = 140 % 60 = 20 reset left right -= 1
// 10 + 50 = 60 % 60 = 0 counter += 1 left += 1

// [ 60a 60b 60c ]
// 60a + 60c = 120 % 60 = 0 counter += 1 , increment l || r???????!?!?
// 

// 

// function playlist(songs) {
//     let counter = 0
//     let left = 0
//     let right = songs.length - 1
//     let songs2 = songs.sort( (a,b) => (a-b))
    
//     while ( left < right) {
//         let sum = songs2[left] + songs2[right]
//         if (sum % 60 === 0 ) {
//             counter += 1
//             left += 1
//         } else if (sum % 60 < 30) {
//             left = 0
//             right -= 1
//         } else {
//             left += 1
//         }
//     }
//     return counter
// }
// [60 60 60 ]
// attempt 3
function playlist(songs) {
    let hash = {}
    let counter = 0
    for (let i = 0; i < songs.length; i++) {
        let mod = songs[i] % 60
        let search = 60 - mod
        if (mod === 0) {
            search = 0
        } 
        if (hash.hasOwnProperty(search)) {
            counter += hash[search]
        }           

        if (hash.hasOwnProperty(mod)) {
            hash[mod] += 1 
        } else {
            hash[mod] = 1
        }
    }
    return counter
}
// [ 30 20 150 100 40]
// mod = 20 % 60 = 40 
// counter = 2
// hash[30] = 2
// hash[20] = 1
// hash[40] = 2




