// DATE: 12/08/2020
// Problem:  Min Number of Coins for Change
	// given an array of positive integers
	// A single non-negative integers - n / the target amount of money
	// Write a function that returns the smallest number of coins needed to make change for given the coin denomination
	// If impossible return -1
// Attempt #2
// High Level Solution
		// iterate through the denom array
		// iterate through 0 to n (nums)
			// check to see if denom[i] <= nums[i]
				// basically check if it can be divided into nums[i]
				// ex. denom[i] = 1, nums[i] = 0
					// 1 >= 0 => so 0
				// nums[i] = 1 && denom[i] <= nums[i]  1 <= 1
					// => 	1 (nums[i]) - 1 (denom[i]) = 0 
				//  nums[i] = 2 && denom[i] <= nums[i]  1 <= 2
					// => 2 (nums[i]) - 1 (denom[i]) = 1 
				// 6 - 2 = 4 => 1 coin + 2 coins = 3 coins
				// 4 - 2 = 2 => 1 coin + 1 coin = 2 coins

// so again man...					
		// iterate through the denoms
		// iterate from 0 to n 
			// check if the d[i] <= n[i]
			// if it is => save into hash
					// hash[d] (n[i] - d[i]) + d[i]

function minNumberOfCoinsForChange(n, denoms) {
    let nums = new Array(n + 1).fill(Infinity)
    nums[0] = 0
    for (let i = 0; i < denoms.length; i++ ) {
        for (let j = 0; j <= n; j++ ) {
            if (denoms[i] <= j) {
                nums[j] = Math.min(nums[j], nums[j - denoms[i]] + 1)
            }
        }
    }
    return nums[n] === Infinity ? -1 : nums[n]
}

// { n = 5; denom = [ 1 2 4 ]
//	0: 0 
//  1: 1
//  2: 1
//  3: 2
//  4: 1
//  5: 3 => 2
// }



// Attempt #1
// High Level Solution: SOLUTION DONT WORK
    // iterate backwards until n / the target < array[i]
    // if n > array[i] 
    // 	Divide n by array[i]
    // 	Math.floor this solution
    // 	Counter += this solution
    // 	Subtract n by solution * array[i]

// function minNumberOfCoinsForChange(n, denoms) {
// 	let counter = 0																	// counter = 24
// 	let i = denoms.length - 1
// 	let denoms2 = denoms.sort( (a,b) => (a - b))
// 	if (n === 0) return 0
// 	while (n >= 0) {
// 		if (denoms2[i] > n) { 
// 				i--
// 				continue
// 		} else {
// 			let solution = Math.floor(n / denoms2[i] )  	// solution = 4 / 2 = 2
// 			counter += solution													// counter += 2
// 			n = n - (solution * denoms2[i] )							// N = 4 - ( 2 * 2) = 0
// 		}
        
// 		if (n === 0) return counter
// 		i-- 	
// 	}
// 	return -1