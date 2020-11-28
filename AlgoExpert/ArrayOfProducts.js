// DATE: 11/28/2020
// PROBLEM: Array of Products
	// takes in an nonempty array of integers
	// returns an array of the same length
		// where each ele in the output array is equal to the products of every other number in the input array
// HIGH LEVEL STRATEGY:
	// create an array holding all the new elements
	// we want to grab every element aside the current one and multiple em together
	
// o(n^2) stratedgy
// iterate through array - i
    // iterate through array again - j
    // have a product variable
    // if i !== j
        // product variable = product variable x array[j]
        // push into array

function arrayOfProducts(array) {
	let productArr = [];
	for (let i = 0; i < array.length; i++) {
		let curProd = 1
		for (let j = 0; j < array.length; j++) {
			if (j !== i) curProd *= array[j]
		}
		productArr.push(curProd)
	}
	return productArr
}


