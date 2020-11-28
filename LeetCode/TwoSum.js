// Leet Code #1 
// https://leetcode.com/problems/two-sum/
// DATE: 11/26/2020
// PROBLEM:Two Sum except bring back the indices 

// High Level Solution: 
    // Create a hash
    // iterate through the nums array
        // missing = target - nums[i]
        // check to see if that exist in the hash
            // if it does return [hash[missing], i]
            // otherwise save it into a hash. hash[nums[i]] = i

// var twoSum = function(nums, target) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++) {
//         let missing = target - nums[i]
//         if (hash.hasOwnProperty(missing)) return [hash[missing], i]
//         hash[nums[i]] = i
//     }
// };