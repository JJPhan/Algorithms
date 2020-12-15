// Problem: Symmetric Tree # 101
    // https://leetcode.com/problems/symmetric-tree/
    // Given binary tree, check whether it is a mirror of itself
// High Level Solution
    // recursion 
    // if the node is not given

    // look at its left 
//        [1]
//       [2 2]
//     [3 4 4 3]
//.   [5, null] [null, 5]
// left = [34] => shift 
// right = [34] => pop

// edge cases for example => 
var isSymmetric = function(root) {
    if (root === null) return true
    let leftArr = [root.left]
    let rightArr = [root.right]
    
    while (leftArr.length !== 0 && rightArr.length !== 0) {
        let left = leftArr.pop()
        let right = rightArr.pop()
        if (left === null && right === null) continue
        if (left === null || right === null) return false
        
        if (left.val !== right.val) {
            return false
        } else {
            leftArr.push(left.left, left.right)
            rightArr.push(right.right, right.left)
        }
        
    }
    return true
};
