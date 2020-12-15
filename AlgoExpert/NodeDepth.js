// DATE: 11/25/2020
// PROBLEM: Node Depth
// HIGH LEVEL STRATEGY:
	// like branch sums
	// instead of keeping track of branch sums => keep track of depth
	
	// create an variable to keep track of all sums 
	// create a new function that takes in the root/ current node, the depth, the sum
	// function will += 1 to depth everytime its called
	// function will add depth to sum
	// and get called again on each of its children
	// base case will be if there is no node

// One Liner
function nodeDepths(node, depth = 0) {
	if (!node) return 0
	return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1)
}

// Original Answer
// function nodeDepths(root) {
//     let sum = []
//     let totalSum = 0
//     addDepthSum(root, 0, sum) 
//     for (let i = 0; i < sum.length; i++ ) {
//         totalSum += sum[i]
//     }
//     return totalSum
// }

// function addDepthSum(node, depth, sum) {
//     if (!node) return 
//     sum.push(depth)
//     depth += 1

//     addDepthSum(node.left, depth, sum)
//     addDepthSum(node.right, depth, sum)
// }