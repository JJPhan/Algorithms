var threeSumClosest = function(nums, target) {
	let difference 
	let sum 
	let sortedArr = nums.sort( (a,b) => (a-b) )
	for (let i = 0; i < sortedArr.length - 2; i++ ) {
    let left = i + 1
		let right = nums.length - 1
		while ( left < right) {
            if (!difference) difference = target - (sortedArr[i] + sortedArr[left] + sortedArr[right])
            if (!sum) sum = sortedArr[i] + sortedArr[left] + sortedArr[right]
            let newDiff = target - (sortedArr[i] + sortedArr[left] + sortedArr[right])
            if (newDiff <= difference) {
	            difference = newDiff
	            sum = sortedArr[i] + sortedArr[left] + sortedArr[right]
                right -= 1
            } else {
                left += 1
            }
        }
    }
        return sum
}
