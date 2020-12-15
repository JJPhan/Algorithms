// DATE: 11/15/2020
// PROBLEM: 
    // Find Closest Value In BST
        // function takes in BST  & target integer value
        // returns the closetst value to that target value containered in BST
        // ONLY ONE CLOSEST VALUE

    // each node
        // has integer value, left & right child node
        // all nodes to its left is < than its value
        // all nodes to its right is eiher >= its value
        // each node value is either None or Null

	// HIGH LEVEL STRATEGY:
				// while (node) 
				// create a variable will hold node value that has the miminal difference to the target
				// deteremine whether root node relation to target
					// if root > target => call function again with 
						// function (tree.left, target)					
					// if root < target => call function again with 
						// function (tree.right, target)
                    // if root === target => return value of target
// Iterative 
function findClosestValueInBst(tree, target) {
    let closest = tree.value // 10
    let currentNode = tree   // 10
    
    while (currentNode) {
        let difference = Math.abs(target - currentNode.value) // 2
        if (difference < Math.abs(target - closest)) closest = currentNode.value 
        
        if (currentNode.value > target) {
            currentNode = currentNode.left
        } else if (currentNode.value < target) {
            currentNode = currentNode.right
        } else {
            return currentNode.value
        }
    }
    return closest
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

// Recursive
// Date: 12/14/2020
// High Level Solution
    // create helper function
    // takes node, closestnode and target
    // compares the difference between current node and target along with closestnode and target
    // reassigns closest node if the new differnce < current difference
    // depending on the relation between target and node
        // we'll traverse the tree differently left or right
        // and call the helperfunction again on the node itself - passing in the node, closestNode, target
    // eventually it hits the base case - where we don't have any nodes
        // from here we'll return the node and itll bubble up to the main function
        // where we will return the closest node

function findClosestValueInBst(tree, target) {
    let closestNode = tree
    return helperFunc(tree, target, closestNode) 
}

function helperFunc(node, target, closestNode) {
    if (!node) return closestNode.value
    let closestDiff = Math.abs(target - closestNode.value)
    let currentDiff = Math.abs(target - node.value)
    if (currentDiff < closestDiff) closestNode = node
    if (target < node.value) {
        return helperFunc(node.left, target, closestNode) 
    } else {
        return helperFunc(node.right, target, closestNode)
    }
}