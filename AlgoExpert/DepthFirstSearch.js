
// DATE: 12/14/2020 - REDONE
// PROBLEM: Depth First Search
// HIGH LEVEL EXPLANATION:
	// an array of the order of DFS
	// so we want the return array to be ABEFIJ...
	// so shove the current element into the array
	// use recursion on all of its children
	// and use recursion on all of its children too
	// so basically itll attack A 
		// then B C D 
		// before moving onto C, we'll hit all of Bs children with recursion
    // eventually by the end of the loops
    
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          array.push(this.name)
          for (let i = 0; i < this.children.length; i++) {
              this.children[i].depthFirstSearch(array)
          }
          return array
      }
      
  }