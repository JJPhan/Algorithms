function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length - 1)
    
}

function binarySearchHelper(array, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const potMatch = array[middle] 
        if (target === potMatch) {
            return mid
        } else if (target < potMatch) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1; 
}