// DATE: 12/01/2020
// PROBLEM: Run-Length Encoding
// HIGH LEVEL STRATEGY:
	// have a count variable
	// have a empty returning string
	// iterate through the string
		// keep track of the running value
		// if the next iteration !=== current iteration
		// shovel that count to the new array along with its element

function runLengthEncoding(string) {
    let count = 0
    let returnStr = []
    for (let i = 0; i < string.length; i++ ) {
        count += 1
        if (string[i] !== string[i + 1] || count === 9) {
            returnStr.push(count, string[i])
            count = 0
        }
    }
    return returnStr.join("")
}
        