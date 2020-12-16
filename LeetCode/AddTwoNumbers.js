// Date: 12/15/2020
// Prompt:
    // You are given two non-empty linked lists representing two non-negative integers. 
    // The digits are stored in reverse order, and each of their nodes contains a single digit. 
    // Add the two numbers and return the sum as a linked list.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Interviewer: Kit
// Problem: 
    // Given two non-empty linked list
    // Each list represents a non-negative integer
    // the digits are stored in reverse order
    // return two numbers and return the sum as a linked list
// High Level Solution:
	// iterate through the linked list
		// unshift each number into an array
	// grab the two arrays => .join each one individually
	// parseInt(“200”) => add them together 

https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


//High Level Solution:
	// iterate through the linked list
		// unshift each number into an array
	// grab the two arrays => .join each one individually
	// parseInt(“200”) => add them together 

// to string the sum of the two linked list
// iterate backwards, creating a node for each one
// when i get to the last iteration 
    // set this.next to null
var addTwoNumbers = function(l1, l2) {
    let arr1 = [] // => o(n)
    let arr2 = [] // => o(m) where m is like length of l2

    let cur1 = l1
    let cur2 = l2
    
    let f1 = false
    let f2 = false
    
    // while (cur1 !== null) { 
    while (!f1) { 
        arr1.push(cur1.value) 
        cur1 = cur1.next
        if (cur1.next === null) f1 = true
    }
    
    // while (cur2 !== null) { 
    while (!f2) { 
        arr2.push(cur2.value)
        cur2 = cur2.next
        if (cur2.next === null) f2 = true
    }
    
    let num1 = parseInt(arr1.reverse().join(''))
    let num2 = parseInt(arr2.reverse().join(''))
    let sum = num1 + num2
    let sumString = sum.toString()
    let previousNode 
    let firstNode 

    for (let i = sumString.length - 1; i >= 0; i-- ) {
        if (i = sumString.length - 1) {
            previousNode = new ListNode(sumString[i], null)
            firstNode = previousNode
        } else {
            previousNode = new ListNode(sumString[i], previousNode)
        }
    }
    return firstNode
    // console.log(cur1)
    // console.log(cur1.next)
    // console.log(cur1.next.next)
};

// create node 
// when you hit the next iteration
	// re-assign previous node.next to current.node
// edge cases would be the first
	// first node, just create the node
		// next = null
	// everything between
		// create node
		// reassign i - 1.next => current node

// scratch
        // 807
// 7 -> null
// 0 -> 7 
// 8 - 7

// 7-> 0 -> 8
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Arr1 = [342] => “342” => 342
// Arr2 = [465] => “465” => 465  = 807

















// Kit's Answer
// def add_two_numbers(l1, l2)
//     sum = ListNode.new(nil)
//     output = sum
//     extra = false
//     while l1.val
//         newval = l1.val + l2.val
        
//         if extra == true
//             newval += 1   
//             extra = false
//         end
        
//         if newval > 9
//             newval = newval - 10
//             extra = true
//         end
//         if sum.val == nil
//             sum.val = newval
//         else
//             sum.next = ListNode.new(newval)
//             sum = sum.next
//         end
//         # p newval
//         break if l1.next == nil and l2.next == nil

//         if l1.next == nil
//             l1.next = ListNode.new(0)
//         end
//         l1 = l1.next

//         if l2.next == nil
//             l2.next = ListNode.new(0)
        
//         end
//         l2 = l2.next
        
//     end
    
    
//     if extra
//        sum.next = ListNode.new(1) 
//     end
//     output
// end
//  l1[2,4,3], l2 = [5,6,4,1]
//           ^             ^
// carry 1 = true          
// new [7081]
