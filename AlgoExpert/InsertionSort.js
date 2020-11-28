// DATE: 11/26/2020
// PROBLEM: Selection Sort
// HIGH LEVEL STRATEGY:
	// iterate through the array
		// create a pointer 
		// create smallest number variable
		// find the smallest number, save it into the variable
		// after looping swap current iteration with the small variable

        
        
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let pointer = i 
        
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[pointer]) pointer = j
        }
        
        if (pointer !== i) {
            let smallestNum = array[pointer] 
            array[pointer] = array[i] 
            array[i] = smallestNum
        }
    }
    return array
}

        // [2, 1]
            // i: 0
            // arr[i]: 2 
            // pointer: 0
        
            // j: 1
            // arr[j]: 1
            // 1 < 2 => pointer = 1
            // smallest num: 1
            // array[1] = array[i] = array[0] 
                // array[1] = 2
            // array[0] = 