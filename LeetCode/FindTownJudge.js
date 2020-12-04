// DATE: 12/03/2020
// PROBLEM: Find the Town Judge #997
    // https://leetcode.com/problems/find-the-town-judge/
    // N people labeled from 1 to N
    // one of these people MAY be town judge
    // If the judge does exist 
        // Judge trust nobody
        // Everybody trust the Judge
        // Exactly one person that satisifies properties 1 and 2
    // Trust = an array of pairs, so trust[i] = [a, b]
        // where a = person who trust b = the trusted person

    // if the judge exist, return his number
    // else return -1

// HIGH LEVEL STRATEGY:
    // IF THERE IS A JUDGE
        // Because the judge trust no one, he/she wont appear in the first index
        // but the judge will be referred individually by each person
        // so find the number B that is paired with every other number
            // but doesnt exist as number A
        
        // if we attack the first condition
            // we just need to find then number that doesnt exist as number A
            // we can iterate from 1 to N creating keys for each number and values of false
            // if the number exist flip it to true
            // if there is !false => return -1
        // if we attack the second condition
            // we need to find the number that is counted by (n - 1)
            // iterate through the array
            // key = number, += 1 to its value
            // return the key with value of (n - 1)
    
var findJudge = function(N, trust) {
    const cond1 = {} // people who trust 
    const cond2 = {} // people who are trusted
    
    // create a key for each number setting its value to false
    for (let i = 1; i <= N; i++ ) {
        cond1[i] = false
        cond2[i] = 0
    }
    
    // iterate through the array
        // check find its first element, and set it to true
        // create a key of the trusted and add 1 to its value and every time it appears
    for (let i = 0; i < trust.length; i++) {
        cond1[trust[i][0]] = true
        // if (!cond2[trust[i][1]]) cond2[trust[i][1] = 0]
        cond2[trust[i][1]] += 1
    }
    
    // if its cond1 value = false && cond2 value = (n -1)
    for (let i = 1; i <= N; i++) {
        if (cond2[i] === (N - 1) && cond1[i] === false) return i
    }    
    return -1
};
            




// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
//  https://leetcode.com/problems/find-the-town-judge/
// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] 
// Output: 3
// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

// Problem: 
// // N people labelled from 1 to N
// One of these people is secretly town judge
// IF the judge exist

// // Judge trust no one
// // Everybody aside from the judge trust the judge
// // One person that satisfy both 1 and 2

// Given Trust - an array of pairs trust[i] = [a, b]

// If the judge exist, return his number
// // exist as B but does not exist as A 
// // If you trust someone you can not be a judge (so it wont exist as A)

// Otherwise return -1
// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] 

// Pplwhotrust => {1: t
// 2: t
// 3: f 
// 4: t} condition # 1 good return -1 if there is no false

// { 3: 3
// 4: 2 }
// Key will be person B, value will keep count how many times he/she appears
// Now is to check if there is any n-1 in the value
 
// If # of true === n - 1 

// High Level Solution:
// // create a hash with default values of []
// // iterate through the given array, and save each of the first value
// 	// so array[i][0] => hash[key]
// 	// and shovel array[i][1] into value
// // afterwards
// 	// I have to find the number included in all of the arrays
// 	// But is not included as a key

// Var findJudge = function(n, trust) {
// 	Const cond1 = {} // people who trust
// 	Const cond2 = {} // trust count

// For (let i = 1; i <= n; i++) {
// 	cond1[i] = false
// }

// For (let i = 0; i < n; i++) {
// 	cond1[trust[i][0]] = true
// 	If (!Cond2[trust[i][1]]) cond2[trust[i][1]] = 0
// 	Cond2[trust[i][1]] += 1
// }
// // If (!Object.values(cond1).includes(false)) return -1
// 	// check which key is false (cond1)
// 	// check if the value is n -1   (cond2)
// For (let i = 1; i <= n; i++) {
// 	If (cond1[i] === false && cond2[i] === n - 1) return i
// }
// Return -1
// }
