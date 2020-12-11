// DATE: 12/11/2020
// PROBLEM: Hacker Rank - Monsoon Umbrellas
    // Umbrellas have diff size - able to shelter a certain amount of peepz
    // Given the number of peez needing shelter and a list of umbrella sizes
        // determine the min # of umbrellas necessay to cover EXACTLY the # of people given and no more
        // return the # of people 
    // If theres no combination that covers exactly that number 
        // return -1
    
    // requirement = how many people we gotta cover
    // sizes = an array of the umbrella coverage or something 
    
// HIGH LEVEL STRATEGY:
// idea #1 - Garbo 
    // maybe save each of the sizes as a key in a hash?
    // iterate through the array -> save each size in the hash
        // see if requirement - size[i] is located in the hash so => 2
// idea #2 - Dynamic? Like the coin one?
    // create an array 0 to req 
    // all have infinity as value
    // iterate through the sizes
        // iterate through the new array    
        // if sizes[i] <= j 
        // newArr[j] = Math.min(size[j], sizes[j - newArr[i] + 1])
    // return newArr[req] === Infinity ? -1 : newArr[req] 
// Scratch 
    // ex.  sizes [ 2 4 ] req = 4
    // idx =  [ 0 1 2 3 4 ]
    // nums = [ 0 I 1 I 1 ]
    // answer should be 1
function getUmbrellas(req, sizes) {
    let nums = new Array(req + 1).fill(Infinity)
    nums[0] = 0
    for (let i = 0; i < sizes.length; i++) {
        for (let j = 0; j <= req; j++) {
            if (sizes[i] <= j) {
                nums[j] = Math.min(nums[j], nums[j - sizes[i]] + 1)
                // 2 vs nums[] = 1 + 1
            }
        }
    }
    console.log(nums)
    return nums[req] === Infinity ? -1 : nums[req]
}