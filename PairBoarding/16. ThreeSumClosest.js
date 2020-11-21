// Find the sum of three integers closest to the given target
    // sort array desc
    // iterate through sorted array 
    // have two pointers
    
var threeSumClosest = function(nums, target) {
	let sum = -Infinity 
    let newSum
	let sortedArr = nums.sort( (a,b) => (a-b) )
    
	for (let i = 0; i < sortedArr.length - 2; i++ ) {
        let left = i + 1
		let right = nums.length - 1
        
		while ( left < right) {
            newSum = sortedArr[i] + sortedArr[left] + sortedArr[right]
            let diff1 = Math.abs(target - newSum)
            let diff2 = Math.abs(target - sum )
            if (newSum === target) return (newSum)

            if (diff1 < diff2) sum = newSum
            
            if (newSum < target) {
                left += 1
            } else {
                right -= 1
            }     
        }
    }
    return sum
}