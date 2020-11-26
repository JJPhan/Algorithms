// DATE: 11/25/2020
// PROBLEM: Branch Sums
		// find the sum of every branch in the binary tree
// HIGH LEVEL STRATEGY:
	// this is a DFS problem 
	// return an array with every branch sum in it
	// we want to iterate through the tree, until it hits a point where it has no nodes
		// if it has no more children nodes, we can calculate the sum of every node prior to it
		// add this running sum into the main sum array

	// so create an empty array to hold our sum
	// and call a recursion function on it
		// this function will taken in a node, a running sum, and the sum array
		
		// we want to keep calling this function recursively until there is no children left
			// basically we're gonna call it on every single children of the current node
			// eventually itll fork trinkle down and it a point with no children
			// because itll fork, each branch will be just solely its line
			// no need for keeping track of if we visited this fork/branch already

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    }
    
    function branchSums(root) {	
        const sums = []
        calcBranchSums(root, 0, sums)
        return sums
    }
    
    function calcBranchSums(node, runningSums, sums) {
        if (!node) return
        runningSums = runningSums + node.value
        if (!node.left && !node.right) {
            sums.push(runningSums)
            return
        }
        
        calcBranchSums(node.left, runningSums, sums)
        calcBranchSums(node.right, runningSums, sums)
    }
              