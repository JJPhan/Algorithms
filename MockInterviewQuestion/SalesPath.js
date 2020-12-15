// Sales Path
// The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). 
// The root is the company itself, and every node in the tree represents a car distributor that receives cars 
// from the parent node and ships them to its children nodes. 
// The leaf nodes are car dealerships that sell cars direct to consumers. 
// In addition, every node holds an integer that is the cost of shipping a car to it.

// Date: 12/14/2020
// Problem: Sales Path - Pramp
// Find the smallest branch sum

// Problem:
  // PolyTrees??
  // root = company
  // node = car distributor
  // node receives cars from parent
  // leaf = dealership
  // holds integer that is cost of shipping a car to it
  // find minimal sales path cost in a tree
// High Level Solution:
  // Trees uses like a stack or queue
  // start at 0, go through its children
  // go through its children chilren, until you hit the leaf/ no children
  // calculate the running sum somehow 
  // save to like an array or compare it a minimal variable

  // something with recursion
  // base case is if node does not have children, shovel sum into an array
  // keep a running sum and an array to hold all sum?
   // start at 0
    //
// how bout we do depth first search
// when it bubbles back up, compare to the cheapestCost

// can't test 
function getCheapestCost(rootNode) {
    let cheapestSum = Infinity
    return helperFunc(rootNode, 0, cheapestSum)
  }
  
function helperFunc(node, runningSum, cheapestSum) {
    if (node === null) {
        if (runningSum < cheapestSum) cheapestSum = runningSum
        return cheapestSum
    }
    runningSum += this.cost
    helperFunc(node.left, runningSum, cheapestSum)
    helperFunc(node.right, runningSum, cheapestSum)
}