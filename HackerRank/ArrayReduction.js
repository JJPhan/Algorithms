// DATE: 12/10/2020
// PROBLEM: Hacker Rank - Array Reduction
    // given an array 
    // array can be reduced by 1 element by performing a move?
    // Each move consist of three steps
        // Pick to elements num[i] & num[j] && i != j
        // basically pick two elements, remove them from the array, and add the sum to the end
    // how much does it cost / moves do u gotta do to reduce this to one element?
    // the cost is the sum 
// HIGH LEVEL STRATEGY:
    // nums = [ O4, O6, O8, O10, 18 ]
    // cost is 28 because we added 10 and 18 
    // sort the array => nums.sort( (a,b) => (a-b))
        // let num1 = array.shift()
        // let num2 = array.shift()
        // array.push(num1 + num2)
        // do this until uh like array.length === 1
// arr = [ 1, 2, 3, 4]

function reductionCost(num) {
    let cost = 0
    while (num.length > 1) {
        num = num.sort( (a,b) => (a - b ))
        let num1 = num[0]
        let num2 = num[1]
        cost += (num1 + num2)
        num.push(num1 + num2) 
        num.shift()
        num.shift()
    }
    return cost
}