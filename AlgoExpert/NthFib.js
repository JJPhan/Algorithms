// DATE: 11/12/2020
// PROBLEM: Nth Fibonacci
			// Fib Sequence is [0, 1, (n -1)th + (n -2)th numbers ] 
			// Write a function that takes in an integer n and return the nth Fibonacci number
			
// HIGH LEVEL STRATEGY:
			// Fib Sequence is [0, 1, (n -1)th + (n -2)th numbers ] 
			// Recursion Problem
				// Base Case: if n = 1 return 0
				// Base Case: if n = 2 return 1
			// Use Recursion Magic => getNthFib(n - 1 ) + getNethFib(n - 2)
		

            function getNthFib(n) {
                if (n === 1) {
                    return 0
                } else if (n === 2) {
                    return 1
                } else {
                    return getNthFib(n-1) + getNthFib(n-2)
                    // if n = 3 ; returns 1 + 0 = 1 
                    // if n = 4 ; returns 1 + 1 = 2
                    // if n = 4 ; returns 1 + 1 = 2
                }
            }
            