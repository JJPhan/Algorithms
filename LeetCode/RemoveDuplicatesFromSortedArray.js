// DATE: 11/28/2020
// PROBLEM: Remove Duplicate from Sorted Array  #26
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/ 
// HIGH LEVEL STRATEGY:
    // we need to modify the array in place
    // so maybe if num[i] === nums[i + 1] 
    //  => slice the array to exclude this number

var removeDuplicates = function(nums) {
    let i = 0
    while (i < nums.length) {
        nums[i] === nums[i + 1] ? nums.splice(i + 1, 1) : i += 1
    }
    return nums.length
};