// DATE: 11/12/2020
// PROBLEM:
        // function takes in a special array - returns its product sum
        // special array - an non-empty array that containers either integers or other "special arrays"
        // the product sum of a "special array" is the sum of its elements, where "special" arrays inside it are summed themselves then multiplied by their level of depth

// HIGH LEVEL STRATEGY:
        // have a counter to keep track of its product sum
        // iterate through the argument
        // if it is an integer add to its counter
        // if it isArray => iterate through the array
        // keep track of depth => have a counter

        function productSum(array, multi=1) {
            let answer = 0
            
            for (let i = 0; i < array.length; i++ ) {
                if (!Array.isArray(array[i])) {
                    answer += array[i] * multi
                } else {
                    answer += multi * productSum(array[i], (multi + 1))
                }
            }
            return answer
        }