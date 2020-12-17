// Date: 12/17/2020 
// Pramp:
// Interviewer: John Lim
// Problem: 
  // Given unsort array of integers, and number s
  // find four numbers that add up to the target
  // return an array of these numbers in ascending order
  // if doesnt exist, return empty array
  // return the first set found

// High Level Solution:
  // sort the arr => o(n log n)
  // For 3Sum => youll use a pointer

// input:  arr = [ 2, 7, 4, 0, 9, 5, 1, 3], s = 20
// input:  arr = [ F0, J1, L2, 3, 4, 5, 7, R9], s = 17 // atm target = 12

// 20 - 2  so target would be 18
// and I could maybe do the 3 Sums on 18 
 // [i4,j4,l4,r4]

// Attempt #1
// o(n) time
// o(1) space

function findArrayQuadruplet(arr, s) {
    arr = arr.sort( (a,b) => (a-b))
  
    let returnArr = [] 
    
    for (let i = 0; i < arr.length - 3; i++ ) {
      for (let j = i + 1; j < arr.length - 2; j++ ) {
        let left = j + 1
        let right = arr.length - 1
        let target = s - arr[i] - arr[j]
        
        while (left < right) {
          if (arr[left] + arr[right] === target) {
            returnArr.push(arr[i], arr[j], arr[left], arr[right])
            return returnArr
          } else if (arr[left] + arr[right] < target) {
            left += 1
          } else if (arr[left] + arr[right] > target) {
            right -= 1
          }
        }
      }
    }
    return returnArr
  }